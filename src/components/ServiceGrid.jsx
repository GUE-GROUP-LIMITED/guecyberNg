/**
 * ServiceGrid — Vektor-style mixed card layout.
 *
 * First service → large featured peach-gradient card (centre column).
 * Remaining services → small icon-badge cards in left/right columns.
 *
 * Each service entry now has:
 *   { Icon: LucideComponent, title, description }
 */

const ICON_CLASSES = [
    "icon-purple",
    "icon-blue",
    "icon-orange",
    "icon-green",
    "icon-red",
    "icon-teal",
];

// Sub-items displayed inside the featured card for the first service
const FEATURED_SUB_ITEMS = [
    "Awareness Training",
    "Phishing Simulation",
    "Endpoint Protection",
];

function ServiceGrid({ services }) {
    if (!services || services.length === 0) return null;

    const [featured, ...rest] = services;

    // Split remaining into left and right columns
    const leftCards  = rest.filter((_, i) => i % 2 === 0);
    const rightCards = rest.filter((_, i) => i % 2 !== 0);

    return (
        <div className="services-layout">
            {/* ── LEFT COLUMN ── */}
            <div className="service-col-left">
                {leftCards.map((svc, i) => (
                    <ServiceSmallCard
                        key={svc.title}
                        svc={svc}
                        colorClass={ICON_CLASSES[(i * 2) % ICON_CLASSES.length]}
                        revealClass={`reveal reveal-left reveal-delay-${(i % 3) + 1}`}
                    />
                ))}
            </div>

            {/* ── FEATURED CENTRE CARD ── */}
            <div className="reveal-scale">
                <div className="service-card-featured">
                    <p className="service-featured-header">{featured.title}</p>
                    <div className="service-featured-divider" aria-hidden="true" />
                    <div className="service-featured-items">
                        {FEATURED_SUB_ITEMS.map((item) => (
                            <span key={item} className="service-featured-item">
                                {item}
                            </span>
                        ))}
                        <p style={{
                            marginTop: "1rem",
                            fontSize: "0.845rem",
                            color: "rgba(26,26,46,0.65)",
                            lineHeight: 1.65,
                        }}>
                            {featured.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="service-col-right">
                {rightCards.map((svc, i) => (
                    <ServiceSmallCard
                        key={svc.title}
                        svc={svc}
                        colorClass={ICON_CLASSES[(i * 2 + 1) % ICON_CLASSES.length]}
                        revealClass={`reveal reveal-right reveal-delay-${(i % 3) + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function ServiceSmallCard({ svc, colorClass, revealClass }) {
    const { Icon, title, description } = svc;

    return (
        <div className={`service-card-small ${revealClass}`}>
            <div className={`service-card-icon-wrap ${colorClass}`} aria-hidden="true">
                {Icon && <Icon size={22} strokeWidth={1.8} color="#fff" />}
            </div>
            <p className="service-card-title">{title}</p>
            <p className="service-card-desc">{description}</p>
        </div>
    );
}

export default ServiceGrid;
