import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AboutCluster from "../components/AboutCluster";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { aboutParagraphs, milestones, services, stats } from "../data/siteContent";

function StatBar({ stats }) {
    return (
        <div className="stat-bar reveal">
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
            {milestones.map((m, i) => (
                <div
                    className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 5)}`}
                    key={m.year}
                >
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

            {/* HERO — peach gradient with blob & wave clip-path bottom */}
            <HeroSection
                eyebrow="Gue Cyber Limited · RC 8341363"
                title="Cybersecurity Training"
                titleAccent="& IT Services in Nigeria"
                subtitle="We help organisations, schools, and individuals in Benue State stay secure, get technically supported, and build digital skills — since 2010."
                actions={
                    <>
                        <Link className="btn btn-primary" to="/contact">Get in Touch</Link>
                        <Link className="btn btn-ghost" to="/services">Our Services</Link>
                    </>
                }
            />

            <main>
                {/* STATS */}
                <div className="container">
                    <StatBar stats={stats} />
                </div>

                {/* ── ABOUT — centered heading + hex badge cluster ── */}
                <section id="about" className="about-cluster-section">
                    <div className="container">
                        {/* Eyebrow */}
                        <p className="section-eyebrow reveal" style={{ justifyContent: "center" }}>
                            <span className="section-eyebrow-line" aria-hidden="true" />
                            02 — About Us
                        </p>

                        {/* Large centered heading */}
                        <h2
                            className="section-heading reveal reveal-delay-1"
                            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 0.8rem" }}
                        >
                            We Believe in the Power of a{" "}
                            <span className="section-heading-accent">Creative Approach</span>
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="section-sub reveal reveal-delay-2"
                            style={{ textAlign: "center", margin: "0 auto 0" }}
                        >
                            We are narrative designers and brand creators. Quality design is about building meaningful relationships.
                        </p>

                        {/* Hex cluster — the visual centrepiece */}
                        <AboutCluster />

                        {/* Text content below cluster */}
                        <div
                            className="reveal"
                            style={{
                                maxWidth: "72ch",
                                margin: "2.5rem auto 0",
                                textAlign: "center",
                            }}
                        >
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph} style={{ marginTop: "0.9rem", color: "var(--ink-muted)" }}>
                                    {paragraph}
                                </p>
                            ))}
                            <p style={{ marginTop: "0.9rem", color: "var(--ink-muted)" }}>
                                Gue Cyber Limited is a subsidiary of{" "}
                                <a
                                    href="https://www.guegroup.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "var(--coral)", fontWeight: 700 }}
                                >
                                    Gue Group Limited
                                </a>
                                .
                            </p>
                            <div className="section-actions" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
                                <Link className="btn-text" to="/contact">Contact Us →</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SERVICES — clip-path diagonal top ── */}
                <InfoSection
                    id="services"
                    eyebrow="01 — Our Services"
                    title="Creative Services with"
                    accent="Measurable Impact"
                    alt
                >
                    <p className="reveal">
                        From cybersecurity training to CBT infrastructure and IT support — practical technology services built for Benue State organisations.
                    </p>
                    <ServiceGrid services={services} />
                    <div className="section-actions reveal">
                        <Link className="btn btn-dark" to="/services">See All Services</Link>
                    </div>
                </InfoSection>

                {/* ── CBT HIGHLIGHT ── */}
                <InfoSection
                    id="cbt"
                    eyebrow="03 — CBT Center"
                    title="CBT Center —"
                    accent="Coming to Wannune"
                >
                    <div className="reveal">
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
                            <span className="badge badge-status" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                                <Check size={11} strokeWidth={3} />Land Acquired
                            </span>
                            <span className="badge badge-status" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                                <Check size={11} strokeWidth={3} />Drawings Complete
                            </span>
                        </div>
                        <div className="section-actions">
                            <Link className="btn-text" to="/cbt">Learn More About CBT →</Link>
                        </div>
                    </div>
                </InfoSection>

                {/* ── HISTORY — clip-path diagonal transitions ── */}
                {/* Top clip-path ramp INTO the alt section */}
                <div className="process-clip-wrap">
                    <InfoSection
                        id="history"
                        eyebrow="04 — Our History"
                        title="A Clear Path to"
                        accent="Our Journey"
                        alt
                        sub="From a single ICT shop in Makurdi to a formally incorporated company with group structure — 15 years of building technology services in Benue State."
                    >
                        <Timeline milestones={milestones} />
                    </InfoSection>
                </div>
            </main>
        </>
    );
}

export default HomePage;
