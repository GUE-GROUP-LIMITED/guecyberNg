/**
 * InfoSection — section wrapper with Vektor-style eyebrow numbering.
 *
 * Props:
 *   id      - HTML id for anchor links
 *   title   - section heading text
 *   accent  - optional italic/coral word inside heading
 *   eyebrow - e.g. "01 — Our Services" (auto-generated from index if not supplied)
 *   alt     - light grey background
 *   dark    - dark navy background
 *   center  - center-align text
 *   sub     - optional subtitle paragraph below heading
 *   children
 */
function InfoSection({ id, title, accent, eyebrow, alt, dark, center, sub, children }) {
    const sectionClass = [
        dark ? "section-dark" : "section",
        alt  ? "section-alt" : "",
        center ? "section-center" : "",
    ].filter(Boolean).join(" ");

    return (
        <section id={id} className={sectionClass}>
            <div className="container">
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

                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default InfoSection;
