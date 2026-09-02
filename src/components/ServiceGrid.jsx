/**
 * ServiceGrid — Clean, balanced card grid for services.
 *
 * Renders all services as consistent cards with colorful icon badges,
 * titles, descriptions, and smooth hover animations.
 */

const ICON_CLASSES = [
    "icon-purple",
    "icon-blue",
    "icon-orange",
    "icon-green",
    "icon-red",
    "icon-teal",
];

function ServiceGrid({ services }) {
    if (!services || services.length === 0) return null;

    return (
        <div className="services-cards-grid">
            {services.map((svc, i) => {
                const { Icon, title, description } = svc;
                const colorClass = ICON_CLASSES[i % ICON_CLASSES.length];
                const revealClass = `reveal reveal-delay-${(i % 3) + 1}`;

                return (
                    <div
                        key={title}
                        className={`service-grid-card ${revealClass}`}
                    >
                        <div className={`service-card-icon-wrap ${colorClass}`} aria-hidden="true">
                            {Icon && <Icon size={24} strokeWidth={1.8} color="#fff" />}
                        </div>
                        <h3 className="service-grid-card-title">{title}</h3>
                        <p className="service-grid-card-desc">{description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ServiceGrid;
