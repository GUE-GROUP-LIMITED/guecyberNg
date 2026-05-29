import assert from "node:assert/strict";
import handler from "../api/contact.js";

function createReq({ method = "POST", body = {}, headers = {}, socket = {} } = {}) {
    return {
        method,
        body,
        headers,
        socket
    };
}

function createRes() {
    return {
        statusCode: 200,
        payload: undefined,
        status(code) {
            this.statusCode = code;
            return this;
        },
        json(data) {
            this.payload = data;
            return this;
        }
    };
}

function makeValidBody(overrides = {}) {
    return {
        name: "Gabriel A",
        email: "gabriel@example.com",
        phone: "+2348000000000",
        service: "IT Support",
        message: "I need help with network setup and endpoint hardening.",
        consent: true,
        ...overrides
    };
}

async function run() {
    process.env.WEB3FORMS_ACCESS_KEY = "test-key";

    const originalFetch = global.fetch;
    global.fetch = async () => ({
        ok: true,
        async json() {
            return { success: true };
        }
    });

    try {
        {
            const req = createReq({ method: "GET" });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 405);
        }

        {
            const req = createReq({ body: "{" });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 400);
            assert.equal(res.payload.success, false);
        }

        {
            const req = createReq({ body: makeValidBody({ email: "bad-email" }) });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 400);
        }

        {
            const req = createReq({ body: makeValidBody({ service: "Unknown" }) });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 400);
        }

        {
            const req = createReq({ body: makeValidBody({ consent: false }) });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 400);
        }

        {
            const req = createReq({ body: makeValidBody({ website: "spam" }) });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 200);
            assert.equal(res.payload.success, true);
        }

        {
            const req = createReq({
                body: makeValidBody(),
                headers: { "x-forwarded-for": "203.0.113.12" }
            });
            const res = createRes();
            await handler(req, res);
            assert.equal(res.statusCode, 200);
            assert.equal(res.payload.success, true);
        }

        {
            const ip = "198.51.100.10";
            for (let idx = 0; idx < 5; idx += 1) {
                const req = createReq({ body: makeValidBody(), headers: { "x-forwarded-for": ip } });
                const res = createRes();
                await handler(req, res);
                assert.equal(res.statusCode, 200);
            }

            const blockedReq = createReq({ body: makeValidBody(), headers: { "x-forwarded-for": ip } });
            const blockedRes = createRes();
            await handler(blockedReq, blockedRes);
            assert.equal(blockedRes.statusCode, 429);
        }

        console.log("contact api tests: ok");
    } finally {
        global.fetch = originalFetch;
    }
}

run().catch((error) => {
    console.error("contact api tests: failed");
    console.error(error);
    process.exitCode = 1;
});
