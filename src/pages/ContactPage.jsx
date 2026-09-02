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

            {/* HERO */}
            <HeroSection
                eyebrow="Contact"
                title="Let's Talk About Your"
                titleAccent="IT & Cybersecurity Needs"
                subtitle="Share your goals and challenges. Our team will respond with practical next steps for support, training, or project delivery."
                actions={
                    <>
                        <a className="btn btn-primary" href="#contact-form">Send Message</a>
                        <Link className="btn btn-ghost" to="/services">View Services</Link>
                    </>
                }
            />

            <main>
                <InfoSection
                    id="contact-form"
                    eyebrow="01 — Send a Message"
                    title="Contact"
                    accent="Us"
                >
                    <div className="reveal">
                        <p>
                            Send a message using the form below and our team will respond as soon as possible.
                        </p>
                        <ContactForm />
                        <p style={{ marginTop: "1rem", color: "var(--ink-muted)", fontSize: "0.875rem" }}>
                            Email: <a href="mailto:info@guecyber.ng" style={{ color: "var(--coral)", fontWeight: 700 }}>info@guecyber.ng</a>
                        </p>
                        <p style={{ color: "var(--ink-muted)", fontSize: "0.875rem" }}>
                            Website: <a href="https://www.guecyber.ng" target="_blank" rel="noopener noreferrer" style={{ color: "var(--coral)", fontWeight: 700 }}>www.guecyber.ng</a>
                        </p>
                        <p style={{ color: "var(--ink-muted)", fontSize: "0.875rem" }}>
                            Location: Wannune, Benue State, Nigeria
                        </p>
                    </div>
                </InfoSection>
            </main>
        </>
    );
}

export default ContactPage;
