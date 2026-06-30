import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

const cbtFeatures = [
    { icon: "🖥️", title: "Reliable Systems", desc: "Stable, maintained computers configured for CBT examinations — no freezing, no crashes on exam day." },
    { icon: "🌐", title: "Stable Internet", desc: "Dedicated internet connectivity optimised for CBT examination platforms including JAMB CAPS and WAEC portals." },
    { icon: "👨‍💼", title: "Technical Supervision", desc: "Trained staff present throughout every examination session to resolve technical issues immediately." },
    { icon: "📋", title: "Candidate Preparation", desc: "Pre-examination orientation sessions to familiarise candidates with the CBT interface before the real exam." },
    { icon: "🔒", title: "Secure Environment", desc: "Controlled environment with clear protocols for candidate onboarding, identity verification, and session management." },
    { icon: "📍", title: "Wannune Location", desc: "Serving candidates in Wannune and the surrounding communities — reducing travel burden for local students." },
];

function HomePage() {
    return (
        <>
            <Seo
                title="CBT Center — Wannune | Gue Cyber Limited"
                description="Gue Cyber Limited is building a dedicated CBT center in Wannune, Benue State for JAMB, WAEC, and NECO examinations. Land acquired, architectural drawings complete."
            />

            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="CBT Center · Wannune, Benue State"
                        title="Bringing Reliable CBT Infrastructure to Wannune"
                        subtitle="We are building a dedicated Computer-Based Testing center in Wannune for JAMB, WAEC, and NECO candidates — so students no longer need to travel far for examinations."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Partner With Us
                                </Link>
                                <Link className="btn btn-ghost" to="/services">
                                    View All Services
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                {/* STATUS */}
                <InfoSection title="Current Status">
                    <div className="status-grid">
                        <div className="status-card status-done">
                            <div className="status-icon">✅</div>
                            <div>
                                <h3>Land Acquired</h3>
                                <p>The site in Wannune has been secured and is ready for development.</p>
                            </div>
                        </div>
                        <div className="status-card status-done">
                            <div className="status-icon">✅</div>
                            <div>
                                <h3>Architectural Drawings Complete</h3>
                                <p>Professional architectural plans have been designed and approved for the center.</p>
                            </div>
                        </div>
                        <div className="status-card status-progress">
                            <div className="status-icon">🔄</div>
                            <div>
                                <h3>Construction — In Planning</h3>
                                <p>Construction phase is being planned and financed. Contact us to discuss partnership opportunities.</p>
                            </div>
                        </div>
                        <div className="status-card status-progress">
                            <div className="status-icon">📋</div>
                            <div>
                                <h3>JAMB Accreditation</h3>
                                <p>Accreditation process will commence once construction reaches required stage.</p>
                            </div>
                        </div>
                    </div>
                </InfoSection>

                {/* FEATURES */}
                <InfoSection title="What the Center Will Offer" alt>
                    <p>Designed from the ground up for examination-day reliability and candidate comfort.</p>
                    <div className="cards">
                        {cbtFeatures.map((f) => (
                            <div className="card" key={f.title}>
                                <div className="card-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* WHY WANNUNE */}
                <InfoSection title="Why Wannune?">
                    <p>
                        Many students in Wannune and surrounding communities in Benue State currently face long journeys to reach accredited CBT centers for JAMB, WAEC, and NECO examinations. This creates stress, expense, and risk on exam day.
                    </p>
                    <p>
                        Our center will bring accredited CBT infrastructure directly to the community — reducing travel time, lowering costs for families, and giving local students the same reliable access to examinations as students in larger cities.
                    </p>

                    <div className="highlight-box">
                        <p className="highlight-box-title">Interested in partnering with us?</p>
                        <p>We welcome conversations with community organisations, government bodies, schools, and private investors who share our commitment to educational infrastructure in Benue State.</p>
                        <Link className="btn btn-primary btn-dark" to="/contact">Contact Us</Link>
                    </div>
                </InfoSection>
            </main>
        </>
    );
}

export default HomePage;
