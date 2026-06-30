import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { services } from "../data/siteContent";

const securityServices = [
    {
        icon: "🔐",
        title: "Cybersecurity Awareness Training",
        description: "Structured training programmes that teach staff and individuals how to identify cyber threats, protect data, and follow safe digital practices. Delivered in-person in Benue State."
    },
    {
        icon: "🎣",
        title: "Phishing Awareness & Simulation",
        description: "We simulate real phishing attacks against your organisation — then debrief staff on what to look for, how attacks work, and how to report suspicious activity."
    },
    {
        icon: "🛡️",
        title: "Antivirus & Malware Protection",
        description: "Deployment, configuration, and maintenance of antivirus and endpoint protection solutions for small businesses and organisations."
    },
];

const itServices = [
    {
        icon: "🔧",
        title: "IT Support & Maintenance",
        description: "Frontline technical support — networking, system installation, hardware troubleshooting, and software maintenance for businesses and individuals."
    },
    {
        icon: "🌐",
        title: "Network Setup",
        description: "LAN/WiFi installation, router configuration, internet setup, and network troubleshooting for offices and small businesses."
    },
    {
        icon: "💾",
        title: "System Installation & Recovery",
        description: "Operating system installation, data backup, recovery, and migration services."
    },
];

function ServicesPage() {
    return (
        <>
            <Seo
                title="Services | Gue Cyber Limited — Cybersecurity, IT Support & CBT"
                description="Gue Cyber Limited services: cybersecurity awareness training, phishing simulation, IT support, printing, CBT examination infrastructure, and digital skills training in Benue State, Nigeria."
            />

            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Our Services"
                        title="Practical Technology Services for Benue State"
                        subtitle="Cybersecurity training, IT support, printing, CBT infrastructure, and digital skills — delivered to organisations, schools, and individuals across the region."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Talk to Us
                                </Link>
                                <Link className="btn btn-ghost" to="/training">
                                    Training Programmes
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                {/* ALL SERVICES OVERVIEW */}
                <InfoSection title="All Services">
                    <ServiceGrid services={services} />
                </InfoSection>

                {/* CYBERSECURITY DETAIL */}
                <InfoSection title="Cybersecurity Services" alt>
                    <p>
                        Our cybersecurity services focus on what most Nigerian organisations need most right now — <strong>awareness and preparedness</strong>. The biggest threats come through human error: clicking phishing links, using weak passwords, and not recognising social engineering. We fix that.
                    </p>
                    <div className="cards">
                        {securityServices.map((s) => (
                            <div className="card" key={s.title}>
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* IT SUPPORT DETAIL */}
                <InfoSection title="IT Support & Consulting">
                    <p>
                        From a single computer that won't start to a small office network that needs setting up — we provide reliable, responsive IT support across Benue State.
                    </p>
                    <div className="cards">
                        {itServices.map((s) => (
                            <div className="card" key={s.title}>
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* PRINTING */}
                <InfoSection title="Printing & Graphics" alt>
                    <p>
                        Professional printing and graphics services for businesses, schools, events, and individuals. We handle everything from business cards and banners to large format prints.
                    </p>
                    <div className="cards">
                        {[
                            { icon: "🖨️", title: "Large Format Printing", description: "Banners, posters, flex prints, and display materials at professional quality." },
                            { icon: "🎨", title: "Graphics Design", description: "Logos, flyers, branding materials, and marketing collateral designed for print and digital." },
                            { icon: "📄", title: "Document Printing", description: "Standard document printing, binding, and reproduction for offices and individuals." },
                        ].map((s) => (
                            <div className="card" key={s.title}>
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* CTA */}
                <InfoSection title="Need a Service?">
                    <p>Contact us to discuss your requirements. We serve organisations, schools, businesses, and individuals across Benue State.</p>
                    <div className="section-actions">
                        <Link className="btn btn-primary btn-dark" to="/contact">Contact Us</Link>
                        <Link className="btn-text" to="/training">View Training Programmes →</Link>
                    </div>
                </InfoSection>
            </main>
        </>
    );
}

export default ServicesPage;
