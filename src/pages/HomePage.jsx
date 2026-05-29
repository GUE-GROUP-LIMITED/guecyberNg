import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";
import ServiceGrid from "../components/ServiceGrid";
import { aboutParagraphs, services } from "../data/siteContent";

function HomePage() {
    return (
        <>
            <Seo
                title="Gue Cyber Limited | IT Support and Cybersecurity"
                description="Gue Cyber Limited provides IT support, cybersecurity, printing solutions, CBT services, and technology training in Benue State, Nigeria."
            />
            <div className="hero-shell">
                <div className="container">
                    <HeroSection />
                </div>
            </div>

            <main>
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
                </InfoSection>

                <InfoSection id="services" title="Core Services" alt>
                    <ServiceGrid services={services} />
                </InfoSection>
            </main>
        </>
    );
}

export default HomePage;
