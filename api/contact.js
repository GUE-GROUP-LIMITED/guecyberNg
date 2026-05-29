const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const SERVICE_OPTIONS = new Set([
    "IT Support",
    "Cybersecurity",
    "Printing and Graphics",
    "CBT Center",
    "Technology Training"
]);

// Best-effort in-memory rate limiter for serverless instances.
const requestLogByIp = new Map();

function readClientIp(req) {
    const forwarded = req.headers["x-forwarded-for"];

    if (typeof forwarded === "string" && forwarded.length > 0) {
        return forwarded.split(",")[0].trim();
    }

    if (Array.isArray(forwarded) && forwarded.length > 0) {
        return String(forwarded[0]).trim();
    }

    return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
    const now = Date.now();
    const existing = requestLogByIp.get(ip) || [];
    const recent = existing.filter((stamp) => now - stamp < RATE_WINDOW_MS);

    if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
        requestLogByIp.set(ip, recent);
        return true;
    }

    recent.push(now);
    requestLogByIp.set(ip, recent);
    return false;
}

function toTrimmedString(value, maxLen = 2000) {
    return String(value || "").trim().slice(0, maxLen);
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        return res
            .status(500)
            .json({ success: false, message: "Server is missing Web3Forms configuration." });
    }

    if (isRateLimited(readClientIp(req))) {
        return res
            .status(429)
            .json({ success: false, message: "Too many requests. Please try again shortly." });
    }

    let rawBody = {};

    try {
        rawBody = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    } catch {
        return res.status(400).json({ success: false, message: "Invalid JSON payload." });
    }

    if (toTrimmedString(rawBody.website, 200).length > 0) {
        return res.status(200).json({ success: true });
    }

    const body = {
        name: toTrimmedString(rawBody.name, 120),
        email: toTrimmedString(rawBody.email, 254),
        phone: toTrimmedString(rawBody.phone, 40),
        service: toTrimmedString(rawBody.service, 80),
        message: toTrimmedString(rawBody.message, 2000),
        subject: toTrimmedString(rawBody.subject, 160) || "New enquiry from guecyber.ng",
        from_name: toTrimmedString(rawBody.from_name, 120),
        consentTimestamp: toTrimmedString(rawBody.consentTimestamp, 80),
        consent: rawBody.consent === true,
        marketingConsent: rawBody.marketingConsent === true
    };

    if (!body.consent) {
        return res.status(400).json({ success: false, message: "Consent is required." });
    }

    if (body.name.length < 2) {
        return res.status(400).json({ success: false, message: "Please provide a valid name." });
    }

    if (!EMAIL_REGEX.test(body.email)) {
        return res.status(400).json({ success: false, message: "Please provide a valid email." });
    }

    if (!SERVICE_OPTIONS.has(body.service)) {
        return res.status(400).json({ success: false, message: "Please choose a valid service." });
    }

    if (body.message.length < 20) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a longer message." });
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: body.subject,
                from_name: body.from_name || body.name,
                name: body.name,
                email: body.email,
                phone: body.phone,
                service: body.service,
                message: body.message,
                consent: String(body.consent),
                marketing_consent: String(body.marketingConsent),
                consent_timestamp: body.consentTimestamp || new Date().toISOString()
            })
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            return res.status(502).json({ success: false, message: "Form delivery failed." });
        }

        return res.status(200).json({ success: true });
    } catch {
        return res.status(500).json({ success: false, message: "Unexpected server error." });
    }
}
