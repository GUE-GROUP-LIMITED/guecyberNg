function InfoSection({ id, title, alt, children }) {
    return (
        <section id={id} className={`section ${alt ? "section-alt" : ""}`.trim()}>
            <div className="container">
                <h2>{title}</h2>
                <div className="section-content">{children}</div>
            </div>
        </section>
    );
}

export default InfoSection;
