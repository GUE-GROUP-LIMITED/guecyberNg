import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { services } from "../data/siteContent";

function ServicesPage() {
    return (
        <>
            <Seo
                title="Services | Gue Cyber Limited"
                description="Explore Gue Cyber Limited services including IT support, cybersecurity, printing and graphics, and CBT services."
            />
            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Services"
                        title="Technology Services That Keep You Operational"
                        subtitle="From frontline IT support to cybersecurity hardening, we deliver practical systems your team can rely on every day."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Contact Us
                                </Link>
                                <Link className="btn btn-ghost" to="/training">
                                    Explore Training
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                <InfoSection title="Our Services">
                    <p>
                        We combine practical field support with modern business technology so
                        teams can run smoothly, securely, and with confidence.
                    </p>
                    <ServiceGrid services={services} />
                </InfoSection>
            </main>
        </>
    );
}

export default ServicesPage;
