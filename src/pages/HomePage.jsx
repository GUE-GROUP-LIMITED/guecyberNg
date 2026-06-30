import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { aboutParagraphs, milestones, services, stats } from "../data/siteContent";

function StatBar({ stats }) {
    return (
        <div className="stat-bar">
            {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                </div>
            ))}
        </div>
    );
}

function Timeline({ milestones }) {
    return (
        <div className="timeline">
            {milestones.map((m) => (
                <div className="timeline-item" key={m.year}>
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-body">
                        <h3>{m.title}</h3>
                        <p>{m.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function HomePage() {
    return (
        <>
            <Seo
                title="Gue Cyber Limited | Cybersecurity Training & IT Services — Nigeria"
                description="Gue Cyber Limited provides cybersecurity awareness training, phishing awareness, IT support, CBT services, and digital skills training in Benue State, Nigeria. Subsidiary of Gue Group Limited."
            />

            {/* HERO */}
            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Gue Cyber Limited · RC 8341363"
                        title="Cybersecurity Training & IT Services in Nigeria"
                        subtitle="We help organisations, schools, and individuals in Benue State stay secure, get technically supported, and build digital skills — since 2010."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Get in Touch
                                </Link>
                                <Link className="btn btn-ghost" to="/services">
                                    Our Services
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                {/* STATS */}
                <div className="container">
                    <StatBar stats={stats} />
                </div>

                {/* ABOUT */}
                <InfoSection id="about" title="About Gue Cyber Limited">
                    {aboutParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                    <p>
                        Gue Cyber Limited is a subsidiary of{" "}
                        <a href="https://www.guegroup.com" target="_blank" rel="noopener noreferrer">
                            Gue Group Limited
                        </a>
                        .
                    </p>
                    <div className="section-actions">
                        <Link className="btn-text" to="/contact">Contact Us →</Link>
                    </div>
                </InfoSection>

                {/* SERVICES */}
                <InfoSection id="services" title="What We Do" alt>
                    <p>From cybersecurity training to CBT infrastructure and IT support — practical technology services built for Benue State organisations.</p>
                    <ServiceGrid services={services} />
                    <div className="section-actions">
                        <Link className="btn btn-primary btn-dark" to="/services">
                            See All Services
                        </Link>
                    </div>
                </InfoSection>

                {/* CBT HIGHLIGHT */}
                <InfoSection id="cbt" title="CBT Center — Coming to Wannune">
                    <p>
                        We are building a dedicated Computer-Based Testing center in Wannune, Benue State.
                        Land has been acquired and architectural drawings are complete.
                    </p>
                    <p>
                        The center will provide reliable, supervised CBT infrastructure for JAMB, WAEC, and NECO candidates — reducing the need to travel long distances for examinations.
                    </p>
                    <div className="cbt-badges">
                        <span className="badge">JAMB</span>
                        <span className="badge">WAEC</span>
                        <span className="badge">NECO</span>
                        <span className="badge badge-status">Land Acquired ✓</span>
                        <span className="badge badge-status">Drawings Complete ✓</span>
                    </div>
                    <div className="section-actions">
                        <Link className="btn-text" to="/cbt">Learn More About CBT →</Link>
                    </div>
                </InfoSection>

                {/* TIMELINE */}
                <InfoSection id="history" title="Our History" alt>
                    <p>From a single ICT shop in Makurdi to a formally incorporated company with group structure — 15 years of building technology services in Benue State.</p>
                    <Timeline milestones={milestones} />
                </InfoSection>
            </main>
        </>
    );
}

export default HomePage;
