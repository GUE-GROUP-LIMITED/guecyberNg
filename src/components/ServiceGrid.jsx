function ServiceGrid({ services }) {
    return (
        <div className="cards">
            {services.map((service) => (
                <div className="card" key={service.title}>
                    {service.icon && (
                        <div className="card-icon" aria-hidden="true">{service.icon}</div>
                    )}
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ServiceGrid;
