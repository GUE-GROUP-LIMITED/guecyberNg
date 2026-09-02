import { Link } from "react-router-dom";
import {
    Monitor,
    Wifi,
    UserCheck,
    ClipboardList,
    Lock,
    MapPin,
    CheckCircle2,
    RefreshCw,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SplitSection from "../components/SplitSection";
import Seo from "../components/Seo";

const cbtFeatures = [
    { Icon: Monitor,       iconClass: "icon-blue",   title: "Reliable Systems",      desc: "Stable, maintained computers configured for CBT examinations — no freezing, no crashes on exam day." },
    { Icon: Wifi,          iconClass: "icon-teal",   title: "Stable Internet",       desc: "Dedicated internet connectivity optimised for CBT examination platforms including JAMB CAPS and WAEC portals." },
    { Icon: UserCheck,     iconClass: "icon-purple", title: "Technical Supervision", desc: "Trained staff present throughout every examination session to resolve technical issues immediately." },
    { Icon: ClipboardList, iconClass: "icon-orange", title: "Candidate Preparation", desc: "Pre-examination orientation sessions to familiarise candidates with the CBT interface before the real exam." },
    { Icon: Lock,          iconClass: "icon-red",    title: "Secure Environment",    desc: "Controlled environment with clear protocols for candidate onboarding, identity verification, and session management." },
    { Icon: MapPin,        iconClass: "icon-green",  title: "Wannune Location",      desc: "Serving candidates in Wannune and the surrounding communities — reducing travel burden for local students." },
];

function CbtPage() {
    return (
        <>
            <Seo
                title="CBT Center — Wannune | Gue Cyber Limited"
                description="Gue Cyber Limited is building a dedicated CBT center in Wannune, Benue State for JAMB, WAEC, and NECO examinations. Land acquired, architectural drawings complete."
            />

            {/* HERO */}
            <HeroSection
                eyebrow="CBT Center · Wannune, Benue State"
                title="Bringing Reliable CBT"
                titleAccent="Infrastructure to Wannune"
                subtitle="We are building a dedicated Computer-Based Testing center in Wannune for JAMB, WAEC, and NECO candidates — so students no longer need to travel far for examinations."
                actions={
                    <>
                        <Link className="btn btn-primary" to="/contact">Partner With Us</Link>
                        <Link className="btn btn-ghost"   to="/services">View All Services</Link>
                    </>
                }
            />

            <main>
                {/* STATUS */}
                <InfoSection
                    eyebrow="01 — Current Status"
                    title="Development"
                    accent="Status"
                >
                    <div className="status-grid reveal">
                        <div className="status-card status-done">
                            <div className="status-icon">
                                <CheckCircle2 size={28} strokeWidth={1.8} color="#059669" />
                            </div>
                            <div>
                                <h3>Land Acquired</h3>
                                <p>The site in Wannune has been secured and is ready for development.</p>
                            </div>
                        </div>
                        <div className="status-card status-done">
                            <div className="status-icon">
                                <CheckCircle2 size={28} strokeWidth={1.8} color="#059669" />
                            </div>
                            <div>
                                <h3>Architectural Drawings Complete</h3>
                                <p>Professional architectural plans have been designed and approved for the center.</p>
                            </div>
                        </div>
                        <div className="status-card status-progress">
                            <div className="status-icon">
                                <RefreshCw size={26} strokeWidth={1.8} color="#d97706" />
                            </div>
                            <div>
                                <h3>Construction — In Planning</h3>
                                <p>Construction phase is being planned and financed. Contact us to discuss partnership opportunities.</p>
                            </div>
                        </div>
                        <div className="status-card status-progress">
                            <div className="status-icon">
                                <ClipboardList size={26} strokeWidth={1.8} color="#d97706" />
                            </div>
                            <div>
                                <h3>JAMB Accreditation</h3>
                                <p>Accreditation process will commence once construction reaches required stage.</p>
                            </div>
                        </div>
                    </div>
                </InfoSection>

                {/* FEATURES */}
                <InfoSection
                    eyebrow="02 — What We Offer"
                    title="What the Center"
                    accent="Will Offer"
                    alt
                    sub="Designed from the ground up for examination-day reliability and candidate comfort."
                >
                    <div className="cards">
                        {cbtFeatures.map(({ Icon, iconClass, title, desc }, i) => (
                            <div className={`card reveal reveal-delay-${Math.min(i + 1, 5)}`} key={title}>
                                <div
                                    className={`service-card-icon-wrap ${iconClass}`}
                                    style={{ marginBottom: "0.8rem" }}
                                    aria-hidden="true"
                                >
                                    <Icon size={22} strokeWidth={1.8} color="#fff" />
                                </div>
                                <h3>{title}</h3>
                                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.3rem" }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* WHY WANNUNE — split section with illustration */}
                <SplitSection
                    eyebrow="03 — Why Wannune"
                    title="Bringing Opportunity"
                    accent="to the Community"
                    illustration={
                        <div className="split-visual">
                            <img
                                src="/illus-cbt.jpg"
                                alt="Student taking a CBT exam on a computer"
                                loading="lazy"
                            />
                            {/* Floating badges over the illustration */}
                            <div className="split-visual-badge badge-tl">
                                <span className="split-visual-badge-dot" />
                                Land Acquired ✓
                            </div>
                            <div className="split-visual-badge badge-br">
                                <span className="split-visual-badge-dot" />
                                JAMB · WAEC · NECO
                            </div>
                        </div>
                    }
                >
                    <p>
                        Many students in Wannune and surrounding communities in Benue State currently face
                        long journeys to reach accredited CBT centers for JAMB, WAEC, and NECO examinations.
                        This creates stress, expense, and risk on exam day.
                    </p>
                    <p style={{ marginTop: "0.9rem" }}>
                        Our center will bring accredited CBT infrastructure directly to the community —
                        reducing travel time, lowering costs for families, and giving local students the same
                        reliable access to examinations as students in larger cities.
                    </p>
                    <div className="highlight-box" style={{ marginTop: "1.8rem" }}>
                        <p className="highlight-box-title">Interested in partnering with us?</p>
                        <p>
                            We welcome conversations with community organisations, government bodies, schools,
                            and private investors who share our commitment to educational infrastructure in
                            Benue State.
                        </p>
                        <div style={{ marginTop: "0.8rem" }}>
                            <Link className="btn btn-dark" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </SplitSection>
            </main>
        </>
    );
}

export default CbtPage;
