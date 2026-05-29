import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_TIME_MS = 3500;
const COOLDOWN_MS = 30000;
const LAST_SUBMIT_KEY = "guecyber:last-contact-submit";
const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

async function sendWithWeb3Forms(accessKey, payload) {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            access_key: accessKey,
            ...payload
        })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit form.");
    }

    return result;
}

function ContactForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        website: "",
        consent: false,
        marketingConsent: false
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: "idle", message: "" });
    const [formStartedAt] = useState(() => Date.now());

    const web3FormsKey = useMemo(() => import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "", []);

    function validate(nextForm) {
        const nextErrors = {};

        if (!nextForm.name.trim()) {
            nextErrors.name = "Please enter your name.";
        }

        if (!nextForm.email.trim() || !EMAIL_REGEX.test(nextForm.email)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!nextForm.service.trim()) {
            nextErrors.service = "Please select a service type.";
        }

        if (!nextForm.message.trim() || nextForm.message.trim().length < 20) {
            nextErrors.message = "Please enter at least 20 characters in your message.";
        }

        if (!nextForm.consent) {
            nextErrors.consent = "You must accept the Privacy Policy and Terms to continue.";
        }

        return nextErrors;
    }

    function onChange(event) {
        const { name, value, type, checked } = event.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    async function onSubmit(event) {
        event.preventDefault();

        const elapsed = Date.now() - formStartedAt;

        if (elapsed < MIN_SUBMIT_TIME_MS) {
            trackEvent("contact_submit_blocked", { reason: "too_fast" });
            setStatus({
                type: "error",
                message: "Please take a moment to complete the form before submitting."
            });
            return;
        }

        const lastSubmit = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
        if (Date.now() - lastSubmit < COOLDOWN_MS) {
            trackEvent("contact_submit_blocked", { reason: "cooldown" });
            setStatus({
                type: "error",
                message: "Please wait a short while before sending another message."
            });
            return;
        }

        if (form.website.trim()) {
            trackEvent("contact_submit_blocked", { reason: "honeypot" });
            setStatus({ type: "success", message: "Thank you. Your message has been sent successfully." });
            navigate("/thank-you");
            return;
        }

        const nextErrors = validate(form);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            trackEvent("contact_submit_invalid", { fields: Object.keys(nextErrors).join(",") });
            setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
            return;
        }

        setStatus({ type: "loading", message: "Sending your message..." });

        try {
            const payload = {
                subject: "New enquiry from guecyber.ng",
                from_name: form.name,
                name: form.name,
                email: form.email,
                phone: form.phone,
                service: form.service,
                message: form.message,
                website: form.website,
                consent: form.consent,
                marketingConsent: form.marketingConsent,
                consentTimestamp: new Date().toISOString()
            };

            const proxyResponse = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!proxyResponse.ok) {
                if (!web3FormsKey) {
                    const proxyResult = await proxyResponse.json().catch(() => ({}));
                    throw new Error(proxyResult.message || "Unable to submit form.");
                }

                await sendWithWeb3Forms(web3FormsKey, payload);
            }

            localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
            trackEvent("contact_submit_success", { route: "contact" });
            setStatus({ type: "success", message: "Thank you. Your message has been sent successfully." });
            setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
                website: "",
                consent: false,
                marketingConsent: false
            });
            navigate("/thank-you");
        } catch (error) {
            trackEvent("contact_submit_error", { message: String(error.message || "unknown_error") });
            const errMessage = String(error.message || "").toLowerCase();
            const userMessage = errMessage.includes("too many requests")
                ? "Too many requests right now. Please wait a minute and try again."
                : error.message || "An unexpected error occurred while sending your message.";
            setStatus({
                type: "error",
                message: userMessage
            });
        }
    }

    return (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
            <input
                className="bot-field"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
                aria-hidden="true"
            />

            <div className="form-grid">
                <label>
                    Full Name
                    <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        autoComplete="name"
                        required
                    />
                    {errors.name ? <span className="field-error">{errors.name}</span> : null}
                </label>

                <label>
                    Email Address
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        autoComplete="email"
                        required
                    />
                    {errors.email ? <span className="field-error">{errors.email}</span> : null}
                </label>

                <label>
                    Phone Number
                    <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={onChange}
                        autoComplete="tel"
                        placeholder="Optional"
                    />
                </label>

                <label>
                    Service Needed
                    <select name="service" value={form.service} onChange={onChange} required>
                        <option value="">Choose one</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Printing and Graphics">Printing and Graphics</option>
                        <option value="CBT Center">CBT Center</option>
                        <option value="Technology Training">Technology Training</option>
                    </select>
                    {errors.service ? <span className="field-error">{errors.service}</span> : null}
                </label>
            </div>

            <label>
                Message
                <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us what you need help with..."
                    required
                />
                {errors.message ? <span className="field-error">{errors.message}</span> : null}
            </label>

            <label className="consent-row">
                <input
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={onChange}
                    required
                />
                <span>
                    I agree to the processing of my personal data in line with the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Use</Link>.
                </span>
            </label>
            {errors.consent ? <span className="field-error">{errors.consent}</span> : null}

            <label className="consent-row">
                <input
                    name="marketingConsent"
                    type="checkbox"
                    checked={form.marketingConsent}
                    onChange={onChange}
                />
                <span>I want to receive optional service updates and training announcements.</span>
            </label>

            <button className="btn btn-submit" type="submit" disabled={status.type === "loading"}>
                {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.type !== "idle" ? (
                <p className={`form-status ${status.type === "success" ? "form-success" : "form-error"}`}>
                    {status.message}
                </p>
            ) : null}
        </form>
    );
}

export default ContactForm;
