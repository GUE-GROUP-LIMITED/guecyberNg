/**
 * SplitSection
 * ─────────────────────────────────────────────
 * Two-column layout: left = content, right = illustration/visual.
 *
 * Props:
 *   id          - anchor id
 *   eyebrow     - small label above the heading
 *   title       - main heading text
 *   accent      - optional italic/coral word at the end of title
 *   sub         - optional paragraph below heading
 *   illustration - JSX / <img> element to show on the right
 *   illustrationAlt - alt text for images
 *   flip        - boolean: put illustration on LEFT and text on RIGHT
 *   alt         - light cloud background
 *   dark        - dark navy background
 *   children    - content below the sub text
 */
function SplitSection({
    id,
    eyebrow,
    title,
    accent,
    sub,
    illustration,
    illustrationAlt,
    flip = false,
    alt = false,
    dark = false,
    children,
}) {
    const sectionClass = [
        dark ? "section-dark" : "section",
        alt  ? "section-alt" : "",
    ].filter(Boolean).join(" ");

    return (
        <section id={id} className={sectionClass}>
            <div className="container">
                <div className={`split-layout${flip ? " split-layout--flip" : ""}`}>
                    {/* ── LEFT: text content ── */}
                    <div className="split-text">
                        {eyebrow && (
                            <p className={`section-eyebrow reveal${dark ? " section-eyebrow-light" : ""}`}>
                                <span className="section-eyebrow-line" aria-hidden="true" />
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className={`section-heading reveal reveal-delay-1${dark ? " section-heading-light" : ""}`}>
                                {title}
                                {accent && (
                                    <>
                                        {" "}
                                        <span className="section-heading-accent">{accent}</span>
                                    </>
                                )}
                            </h2>
                        )}
                        {sub && (
                            <p className={`section-sub reveal reveal-delay-2${dark ? " section-sub-light" : ""}`}>
                                {sub}
                            </p>
                        )}
                        <div className="reveal reveal-delay-2">{children}</div>
                    </div>

                    {/* ── RIGHT: illustration ── */}
                    <div className={`split-visual reveal-right`} aria-hidden={!illustrationAlt}>
                        {illustration}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SplitSection;
