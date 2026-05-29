import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function ContactPage() {
    return (
        <>
            <Seo
                title="Contact | Gue Cyber Limited"
                description="Contact Gue Cyber Limited in Wannune, Benue State for IT support, cybersecurity services, and technology training."
                image="/social-preview.svg"
            />
            <div className="hero-shell">
                <div className="container">
                    <HeroSection
                        eyebrow="Contact"
                        title="Let’s Talk About Your IT and Cybersecurity Needs"
                        subtitle="Share your goals and challenges. Our team will respond with practical next steps for support, training, or project delivery."
                        actions={
                            <>
                                <a className="btn btn-primary" href="#contact-form">
                                    Send Message
                                </a>
                                <Link className="btn btn-ghost" to="/services">
                                    View Services
                                </Link>
                            </>
                        }
                    />
                </div>
            </div>

            <main>
                <InfoSection id="contact-form" title="Contact Us">
                    <p>
                        Send a message using the form below and our team will respond as
                        soon as possible.
                    </p>
                    <ContactForm />
                    <p>Email: info@guecyber.ng</p>
                    <p>Website: www.guecyber.ng</p>
                    <p>Location: Wannune, Benue State, Nigeria</p>
                </InfoSection>
            </main>
        </>
    );
}

export default ContactPage;
