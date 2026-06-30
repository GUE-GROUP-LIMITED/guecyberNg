import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

const programmes = [
    {
        icon: "🔐",
        title: "Cybersecurity Awareness",
        audience: "Staff · Organisations · Schools",
        duration: "Half-day or full-day",
        description: "Practical security awareness training covering password hygiene, safe browsing, email threats, data protection, and incident reporting. Delivered in-person in Benue State.",
        topics: ["Recognising phishing and social engineering", "Safe password practices", "Data protection basics", "What to do when something goes wrong", "GDPR and Nigerian data protection awareness"]
    },
    {
        icon: "🎣",
        title: "Phishing Awareness Programme",
        audience: "Organisations · Businesses",
        duration: "Custom",
        description: "We simulate real phishing attacks against your organisation, then deliver a structured debrief training session. Measurable, practical, and immediately impactful.",
        topics: ["Simulated phishing campaign", "Results analysis and risk assessment", "Staff debrief and education session", "Follow-up assessment available"]
    },
    {
        icon: "💻",
        title: "Digital Literacy & Computer Basics",
        audience: "Students · Individuals · Community",
        duration: "Multi-week",
        description: "Foundational digital skills for students and community members — computer use, internet safety, productivity tools, and basic troubleshooting.",
        topics: ["Computer fundamentals", "Internet and email", "Microsoft Office / Google Workspace basics", "Online safety and privacy"]
    },
    {
        icon: "🎨",
        title: "Graphics Design Training",
        audience: "Students · Creatives · Entrepreneurs",
        duration: "Multi-week",
        description: "Hands-on training in digital graphics design using industry tools. Suitable for students, aspiring designers, and small business owners who want to create their own materials.",
        topics: ["Design principles and typography", "Canva and professional design tools", "Print and digital design", "Branding and logo design basics"]
    },
    {
        icon: "🖥️",
        title: "CBT Examination Preparation",
        audience: "JAMB · WAEC · NECO Candidates",
        duration: "Session-based",
        description: "Practical CBT familiarisation sessions to prepare candidates for computer-based examinations. Reduces exam anxiety and improves performance through interface familiarity.",
        topics: ["CBT interface navigation", "Time management in CBT", "Common technical issues and how to handle them", "Mock examination sessions"]
    },
];

function TrainingPage() {
    return (
        <>
            <Seo
                title="Training Programmes | Gue Cyber Limited"
                description="Cybersecurity awareness training, phishing simulation, digital literacy, graphics design, and CBT preparation from Gue Cyber Limited in Benue State, Nigeria."
            />

            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Training"
                        title="Build Skills That Matter"
                        subtitle="Practical technology and security training programmes for organisations, schools, and individuals across Benue State — delivered in-person by experienced instructors."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Book a Session
                                </Link>
                                <Link className="btn btn-ghost" to="/cbt">
                                    CBT Center
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                <InfoSection title="Our Training Programmes">
                    <p>All programmes are delivered in-person in Benue State. Contact us to discuss scheduling, group rates, and customised content for your organisation or school.</p>
                    <div className="programme-list">
                        {programmes.map((p) => (
                            <div className="programme-card" key={p.title}>
                                <div className="programme-header">
                                    <span className="programme-icon">{p.icon}</span>
                                    <div>
                                        <h3>{p.title}</h3>
                                        <div className="programme-meta">
                                            <span className="badge">{p.audience}</span>
                                            <span className="programme-duration">⏱ {p.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <p>{p.description}</p>
                                <ul className="programme-topics">
                                    {p.topics.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </InfoSection>

                <InfoSection title="Group & Organisational Training" alt>
                    <p>
                        We deliver training for teams, schools, government offices, NGOs, and community groups across Benue State. Group sessions can be customised to your organisation's specific risks, sector, and language needs.
                    </p>
                    <p>
                        We have experience working with audiences of varying digital literacy levels — from senior staff with limited technology exposure to technically literate professionals.
                    </p>
                    <div className="section-actions">
                        <Link className="btn btn-primary btn-dark" to="/contact">Enquire About Group Training</Link>
                    </div>
                </InfoSection>
            </main>
        </>
    );
}

export default TrainingPage;
