function ServiceGrid({ services }) {
    return (
        <div className="cards">
            {services.map((service) => (
                <article className="card" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </article>
            ))}
        </div>
    );
}

export default ServiceGrid;
