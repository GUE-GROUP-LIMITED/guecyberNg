import { Link } from "react-router-dom";
import {
    ShieldCheck,
    FishIcon,
    Monitor,
    Palette,
    Laptop,
    Clock,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SplitSection from "../components/SplitSection";
import Seo from "../components/Seo";

const programmes = [
    {
        Icon: ShieldCheck,
        iconClass: "icon-purple",
        title: "Cybersecurity Awareness",
        audience: "Staff · Organisations · Schools",
        duration: "Half-day or full-day",
        description:
            "Practical security awareness training covering password hygiene, safe browsing, email threats, data protection, and incident reporting. Delivered in-person in Benue State.",
        topics: [
            "Recognising phishing and social engineering",
            "Safe password practices",
            "Data protection basics",
            "What to do when something goes wrong",
            "GDPR and Nigerian data protection awareness",
        ],
    },
    {
        Icon: FishIcon,
        iconClass: "icon-blue",
        title: "Phishing Awareness Programme",
        audience: "Organisations · Businesses",
        duration: "Custom",
        description:
            "We simulate real phishing attacks against your organisation, then deliver a structured debrief training session. Measurable, practical, and immediately impactful.",
        topics: [
            "Simulated phishing campaign",
            "Results analysis and risk assessment",
            "Staff debrief and education session",
            "Follow-up assessment available",
        ],
    },
    {
        Icon: Monitor,
        iconClass: "icon-teal",
        title: "Digital Literacy & Computer Basics",
        audience: "Students · Individuals · Community",
        duration: "Multi-week",
        description:
            "Foundational digital skills for students and community members — computer use, internet safety, productivity tools, and basic troubleshooting.",
        topics: [
            "Computer fundamentals",
            "Internet and email",
            "Microsoft Office / Google Workspace basics",
            "Online safety and privacy",
        ],
    },
    {
        Icon: Palette,
        iconClass: "icon-orange",
        title: "Graphics Design Training",
        audience: "Students · Creatives · Entrepreneurs",
        duration: "Multi-week",
        description:
            "Hands-on training in digital graphics design using industry tools. Suitable for students, aspiring designers, and small business owners who want to create their own materials.",
        topics: [
            "Design principles and typography",
            "Canva and professional design tools",
            "Print and digital design",
            "Branding and logo design basics",
        ],
    },
    {
        Icon: Laptop,
        iconClass: "icon-green",
        title: "CBT Examination Preparation",
        audience: "JAMB · WAEC · NECO Candidates",
        duration: "Session-based",
        description:
            "Practical CBT familiarisation sessions to prepare candidates for computer-based examinations. Reduces exam anxiety and improves performance through interface familiarity.",
        topics: [
            "CBT interface navigation",
            "Time management in CBT",
            "Common technical issues and how to handle them",
            "Mock examination sessions",
        ],
    },
];

/* Process steps — Vektor "A Clear Path" dark section */
const processSteps = [
    {
        title: "Analysis & Strategy",
        desc: "We study your organisation's needs to understand problems and provide a tailored training plan on budget and timeline.",
    },
    {
        title: "Planning & Concept",
        desc: "We conduct audience research to understand the needs and digital literacy levels of your target group.",
    },
    {
        title: "Delivery & Implementation",
        desc: "We deliver training in-person across Benue State, ensuring interactive, hands-on learning for all participants.",
    },
    {
        title: "Testing & Refinement",
        desc: "We conduct post-training assessments to gather feedback and identify areas for further improvement.",
    },
];

function TrainingPage() {
    return (
        <>
            <Seo
                title="Training Programmes | Gue Cyber Limited"
                description="Cybersecurity awareness training, phishing simulation, digital literacy, graphics design, and CBT preparation from Gue Cyber Limited in Benue State, Nigeria."
            />

            {/* HERO */}
            <HeroSection
                eyebrow="Training"
                title="Build Skills That"
                titleAccent="Matter"
                subtitle="Practical technology and security training programmes for organisations, schools, and individuals across Benue State — delivered in-person by experienced instructors."
                actions={
                    <>
                        <Link className="btn btn-primary" to="/contact">Book a Session</Link>
                        <Link className="btn btn-ghost"   to="/cbt">CBT Center</Link>
                    </>
                }
            />

            <main>
                {/* PROGRAMMES */}
                <InfoSection
                    eyebrow="01 — Programmes"
                    title="Our Training"
                    accent="Programmes"
                    sub="All programmes are delivered in-person in Benue State. Contact us to discuss scheduling, group rates, and customised content for your organisation or school."
                >
                    <div className="programme-list">
                        {programmes.map(({ Icon, iconClass, title, audience, duration, description, topics }, i) => (
                            <div
                                className={`programme-card reveal reveal-delay-${Math.min(i + 1, 5)}`}
                                key={title}
                            >
                                <div className="programme-header">
                                    {/* Lucide icon in a coloured badge */}
                                    <div
                                        className={`service-card-icon-wrap ${iconClass}`}
                                        style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0 }}
                                        aria-hidden="true"
                                    >
                                        <Icon size={20} strokeWidth={1.8} color="#fff" />
                                    </div>
                                    <div>
                                        <h3>{title}</h3>
                                        <div className="programme-meta">
                                            <span className="badge">{audience}</span>
                                            <span className="programme-duration" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                <Clock size={12} strokeWidth={2} />
                                                {duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p>{description}</p>
                                <ul className="programme-topics">
                                    {topics.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                {/* PROCESS — dark section with diagonal clip-path edges */}
                <div className="process-clip-wrap">
                <section className="section-dark" id="process">
                    <div className="container">
                        <p className="section-eyebrow section-eyebrow-light reveal">
                            <span className="section-eyebrow-line" aria-hidden="true" />
                            05 — Our Process
                        </p>
                        <h2 className="section-heading section-heading-light reveal reveal-delay-1">
                            A Clear Path to{" "}
                            <span className="section-heading-accent">Design Creation</span>
                        </h2>

                        <div className="process-list">
                            {processSteps.map((step, i) => (
                                <div
                                    className={`process-item reveal reveal-delay-${Math.min(i + 1, 5)}`}
                                    key={step.title}
                                >
                                    <div className="process-number" aria-hidden="true">
                                        {i + 1}
                                    </div>
                                    <p className="process-title">{step.title}</p>
                                    <p className="process-desc">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                </div>{/* /process-clip-wrap */}

                {/* GROUP TRAINING — split with training illustration */}
                <SplitSection
                    eyebrow="06 — Group Training"
                    title="Group & Organisational"
                    accent="Training"
                    alt
                    illustration={
                        <div className="split-visual">
                            <img
                                src="/illus-training.jpg"
                                alt="Trainer presenting to a group of professionals"
                                loading="lazy"
                            />
                            <div className="split-visual-badge badge-tl">
                                <span className="split-visual-badge-dot" />
                                In-Person Sessions
                            </div>
                            <div className="split-visual-badge badge-br">
                                <span className="split-visual-badge-dot" />
                                Custom Curriculum
                            </div>
                        </div>
                    }
                >
                    <p>
                        We deliver training for teams, schools, government offices, NGOs, and community
                        groups across Benue State. Group sessions can be customised to your organisation’s
                        specific risks, sector, and language needs.
                    </p>
                    <p style={{ marginTop: "0.9rem" }}>
                        We have experience working with audiences of varying digital literacy levels —
                        from senior staff with limited technology exposure to technically literate
                        professionals.
                    </p>
                    <div className="section-actions" style={{ marginTop: "1.4rem" }}>
                        <Link className="btn btn-dark" to="/contact">
                            Enquire About Group Training
                        </Link>
                    </div>
                </SplitSection>
            </main>
        </>
    );
}

export default TrainingPage;
