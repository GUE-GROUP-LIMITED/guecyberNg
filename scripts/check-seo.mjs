import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const distIndexPath = path.join(distDir, "index.html");
const requiredDistFiles = ["social-preview.svg", "robots.txt", "sitemap.xml"];

function readFileSafe(filePath) {
    return fs.readFileSync(filePath, "utf8");
}

function ensureFileExists(filePath) {
    assert.equal(fs.existsSync(filePath), true, `Missing file: ${filePath}`);
}

function assertContains(content, needle, label) {
    assert.equal(
        content.includes(needle),
        true,
        `Expected ${label} to include: ${needle}`
    );
}

function run() {
    ensureFileExists(distIndexPath);

    const html = readFileSafe(distIndexPath);
    assertContains(html, '<meta name="description"', "dist/index.html");
    assertContains(html, 'property="og:type"', "dist/index.html");
    assertContains(html, 'property="og:site_name"', "dist/index.html");
    assertContains(html, 'property="og:image"', "dist/index.html");
    assertContains(html, 'name="twitter:card"', "dist/index.html");
    assertContains(html, 'name="twitter:image"', "dist/index.html");
    assertContains(html, "<title>", "dist/index.html");

    for (const fileName of requiredDistFiles) {
        ensureFileExists(path.join(distDir, fileName));
    }

    const robots = readFileSafe(path.join(distDir, "robots.txt"));
    assertContains(robots, "Sitemap:", "dist/robots.txt");

    const sitemap = readFileSafe(path.join(distDir, "sitemap.xml"));
    assertContains(sitemap, "<urlset", "dist/sitemap.xml");
    assertContains(sitemap, "https://www.guecyber.ng/", "dist/sitemap.xml");

    console.log("seo checks: ok");
}

try {
    run();
} catch (error) {
    console.error("seo checks: failed");
    console.error(error.message || error);
    process.exitCode = 1;
}
