import {
    ShieldCheck,
    ShieldAlert,
    Monitor,
    Wrench,
    Globe,
    HardDrive,
    Printer,
    Palette,
    FileText,
} from "lucide-react";

/* ── Cybersecurity services ── */
const securityServices = [
    {
        Icon: ShieldCheck,
        title: "Cybersecurity Awareness Training",
        description:
            "Structured training programmes that teach staff and individuals how to identify cyber threats, protect data, and follow safe digital practices. Delivered in-person in Benue State.",
    },
    {
        Icon: ShieldAlert,
        title: "Phishing Awareness & Simulation",
        description:
            "We simulate real phishing attacks against your organisation — then debrief staff on what to look for, how attacks work, and how to report suspicious activity.",
    },
    {
        Icon: ShieldCheck,
        title: "Antivirus & Malware Protection",
        description:
            "Deployment, configuration, and maintenance of antivirus and endpoint protection solutions for small businesses and organisations.",
    },
];

/* ── IT Support services ── */
const itServices = [
    {
        Icon: Wrench,
        title: "IT Support & Maintenance",
        description:
            "Frontline technical support — networking, system installation, hardware troubleshooting, and software maintenance for businesses and individuals.",
    },
    {
        Icon: Globe,
        title: "Network Setup",
        description:
            "LAN/WiFi installation, router configuration, internet setup, and network troubleshooting for offices and small businesses.",
    },
    {
        Icon: HardDrive,
        title: "System Installation & Recovery",
        description: "Operating system installation, data backup, recovery, and migration services.",
    },
];

/* ── Printing services ── */
const printingServices = [
    {
        Icon: Printer,
        title: "Large Format Printing",
        description: "Banners, posters, flex prints, and display materials at professional quality.",
    },
    {
        Icon: Palette,
        title: "Graphics Design",
        description:
            "Logos, flyers, branding materials, and marketing collateral designed for print and digital.",
    },
    {
        Icon: FileText,
        title: "Document Printing",
        description:
            "Standard document printing, binding, and reproduction for offices and individuals.",
    },
];

import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SplitSection from "../components/SplitSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { services } from "../data/siteContent";

const ICON_CLASSES = ["icon-purple", "icon-blue", "icon-orange", "icon-green", "icon-red", "icon-teal"];

function SimpleCardGrid({ items }) {
    return (
        <div className="cards" style={{ marginTop: "1.8rem" }}>
            {items.map(({ Icon, title, description }, i) => (
                <div
                    className={`card reveal reveal-delay-${Math.min(i + 1, 5)}`}
                    key={title}
                >
                    <div
                        className={`service-card-icon-wrap ${ICON_CLASSES[i % ICON_CLASSES.length]}`}
                        style={{ marginBottom: "0.8rem" }}
                        aria-hidden="true"
                    >
                        <Icon size={22} strokeWidth={1.8} color="#fff" />
                    </div>
                    <h3>{title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.3rem" }}>
                        {description}
                    </p>
                </div>
            ))}
        </div>
    );
}

function ServicesPage() {
    return (
        <>
            <Seo
                title="Services | Gue Cyber Limited — Cybersecurity, IT Support & CBT"
                description="Gue Cyber Limited services: cybersecurity awareness training, phishing simulation, IT support, printing, CBT examination infrastructure, and digital skills training in Benue State, Nigeria."
            />

            {/* HERO */}
            <HeroSection
                eyebrow="Our Services"
                title="Practical Technology Services"
                titleAccent="for Benue State"
                subtitle="Cybersecurity training, IT support, printing, CBT infrastructure, and digital skills — delivered to organisations, schools, and individuals across the region."
                actions={
                    <>
                        <Link className="btn btn-primary" to="/contact">Talk to Us</Link>
                        <Link className="btn btn-ghost" to="/training">Training Programmes</Link>
                    </>
                }
            />

            <main>
                {/* ALL SERVICES */}
                <InfoSection
                    eyebrow="01 — Our Services"
                    title="Creative Services with"
                    accent="Measurable Impact"
                >
                    <ServiceGrid services={services} />
                </InfoSection>

                {/* CYBERSECURITY — split with illustration */}
                <SplitSection
                    eyebrow="02 — Cybersecurity"
                    title="Keeping Your Organisation"
                    accent="Secure & Aware"
                    alt
                    sub="Our cybersecurity services focus on what most Nigerian organisations need most right now — awareness and preparedness. The biggest threats come through human error."
                    flip
                    illustration={
                        <div className="split-visual">
                            <img
                                src="/illus-cyber.jpg"
                                alt="Person at a computer with cybersecurity shield"
                                loading="lazy"
                            />
                            <div className="split-visual-badge badge-tl">
                                <span className="split-visual-badge-dot" />
                                Phishing Simulation
                            </div>
                            <div className="split-visual-badge badge-br">
                                <span className="split-visual-badge-dot" />
                                Endpoint Protection
                            </div>
                        </div>
                    }
                >
                    <SimpleCardGrid items={securityServices} />
                </SplitSection>

                {/* IT SUPPORT */}
                <InfoSection
                    eyebrow="03 — IT Support"
                    title="Reliable IT Support"
                    accent="Across Benue State"
                    sub="From a single computer that won't start to a small office network that needs setting up — we provide reliable, responsive IT support across Benue State."
                >
                    <SimpleCardGrid items={itServices} />
                </InfoSection>

                {/* PRINTING */}
                <InfoSection
                    eyebrow="04 — Printing & Graphics"
                    title="Professional Print &"
                    accent="Visual Media"
                    alt
                    sub="Professional printing and graphics services for businesses, schools, events, and individuals. We handle everything from business cards and banners to large format prints."
                >
                    <SimpleCardGrid items={printingServices} />
                </InfoSection>

                {/* CTA */}
                <InfoSection
                    eyebrow="05 — Get Started"
                    title="Need a Service?"
                    center
                >
                    <p className="section-sub reveal" style={{ marginInline: "auto" }}>
                        Contact us to discuss your requirements. We serve organisations, schools, businesses,
                        and individuals across Benue State.
                    </p>
                    <div className="section-actions reveal" style={{ justifyContent: "center" }}>
                        <Link className="btn btn-dark" to="/contact">Contact Us</Link>
                        <Link className="btn-text" to="/training">View Training Programmes →</Link>
                    </div>
                </InfoSection>
            </main>
        </>
    );
}

export default ServicesPage;
