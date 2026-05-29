import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function TrainingPage() {
    return (
        <>
            <Seo
                title="Technology Training | Gue Cyber Limited"
                description="Gue Cyber Limited offers practical training in digital literacy, cybersecurity awareness, graphics design, and enterprise IT skills."
            />
            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Training"
                        title="Hands-On Technology Training for Teams and Individuals"
                        subtitle="Build practical digital skills through guided sessions in cybersecurity awareness, networking, graphics, and enterprise IT tools."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Book A Session
                                </Link>
                                <Link className="btn btn-ghost" to="/cbt">
                                    Visit CBT Center
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                <InfoSection title="Technology Training" alt>
                    <p>
                        We provide digital literacy, cybersecurity awareness, graphics design,
                        networking and enterprise IT training programs.
                    </p>
                    <p>
                        Training sessions are tailored for students, professionals, and small
                        businesses looking to build practical digital skills.
                    </p>
                </InfoSection>
            </main>
        </>
    );
}

export default TrainingPage;
