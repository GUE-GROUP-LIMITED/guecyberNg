import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const host = "127.0.0.1";
const port = 4173;
const baseUrl = `http://${host}:${port}`;
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

function readSitemapRoutes() {
    const sitemap = fs.readFileSync(sitemapPath, "utf8");
    const matches = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((entry) => entry[1]);

    const routes = new Set();
    for (const loc of matches) {
        const route = new URL(loc).pathname || "/";
        routes.add(route);
    }

    return [...routes];
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPreviewServer() {
    const maxAttempts = 60;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        try {
            const response = await fetch(baseUrl);
            if (response.ok) {
                return;
            }
        } catch {
            // Keep retrying while preview server starts.
        }

        await wait(500);
    }

    throw new Error("Timed out waiting for preview server to start.");
}

async function verifyRoutes(routes) {
    const requiredMetaNeedles = [
        '<meta name="description"',
        'property="og:type"',
        'property="og:site_name"',
        'property="og:image"',
        'name="twitter:card"',
        'name="twitter:image"',
        "<title>"
    ];

    for (const route of routes) {
        const response = await fetch(`${baseUrl}${route}`);
        assert.equal(
            response.status,
            200,
            `Expected ${route} to return 200 but received ${response.status}`
        );

        const html = await response.text();
        for (const needle of requiredMetaNeedles) {
            assert.equal(
                html.includes(needle),
                true,
                `Expected ${route} response to include ${needle}`
            );
        }
    }
}

async function verifySeoAssets() {
    const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
    assert.equal(
        robotsResponse.status,
        200,
        `Expected /robots.txt to return 200 but received ${robotsResponse.status}`
    );

    const robotsContentType = robotsResponse.headers.get("content-type") || "";
    assert.equal(
        robotsContentType.includes("text/plain"),
        true,
        `Expected /robots.txt content-type to include text/plain but got ${robotsContentType}`
    );

    const robotsBody = await robotsResponse.text();
    assert.equal(
        robotsBody.includes("Sitemap:"),
        true,
        "Expected /robots.txt body to include Sitemap:"
    );

    const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
    assert.equal(
        sitemapResponse.status,
        200,
        `Expected /sitemap.xml to return 200 but received ${sitemapResponse.status}`
    );

    const sitemapContentType = sitemapResponse.headers.get("content-type") || "";
    assert.equal(
        /xml|text\/xml|application\/xml/.test(sitemapContentType),
        true,
        `Expected /sitemap.xml content-type to be XML-like but got ${sitemapContentType}`
    );

    const sitemapBody = await sitemapResponse.text();
    assert.equal(
        sitemapBody.includes("<urlset"),
        true,
        "Expected /sitemap.xml body to include <urlset"
    );
}

async function run() {
    assert.equal(fs.existsSync(sitemapPath), true, "Missing dist/sitemap.xml. Run npm run build first.");

    const routes = readSitemapRoutes();
    assert.equal(routes.length > 0, true, "No routes found in sitemap.xml.");

    const preview = spawn(npmCmd, ["run", "preview", "--", "--host", host, "--port", String(port)], {
        cwd: rootDir,
        stdio: "pipe"
    });

    const shutdown = () => {
        if (!preview.killed) {
            preview.kill("SIGTERM");
        }
    };

    process.on("exit", shutdown);
    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

    try {
        await waitForPreviewServer();
        await verifyRoutes(routes);
        await verifySeoAssets();
        console.log("route checks: ok");
    } finally {
        shutdown();
    }
}

run().catch((error) => {
    console.error("route checks: failed");
    console.error(error.message || error);
    process.exitCode = 1;
});
