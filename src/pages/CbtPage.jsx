import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function CbtPage() {
    return (
        <>
            <Seo
                title="CBT Center | Gue Cyber Limited"
                description="Learn about Gue Cyber Limited CBT center support for JAMB, WAEC, and NECO examination infrastructure and candidate readiness."
            />
            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="CBT Center"
                        title="Reliable CBT Infrastructure for High-Stakes Exams"
                        subtitle="We prepare stable computer-based testing environments for JAMB, WAEC, and NECO with technical supervision and support workflows."
                        actions={
                            <>
                                <Link className="btn btn-primary" to="/contact">
                                    Partner With Us
                                </Link>
                                <Link className="btn btn-ghost" to="/services">
                                    View Services
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                <InfoSection title="CBT Center">
                    <p>
                        We are building a modern CBT center to support JAMB, WAEC and NECO
                        examinations with reliable systems, internet access and technical
                        supervision.
                    </p>
                    <p>
                        Our setup is designed for exam-day stability, candidate comfort, and
                        clear support workflows from onboarding to final submission.
                    </p>
                </InfoSection>
            </main>
        </>
    );
}

export default CbtPage;
