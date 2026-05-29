import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function TermsPage() {
    return (
        <main>
            <Seo
                title="Terms of Use | Gue Cyber Limited"
                description="Review the terms of use for accessing Gue Cyber Limited website and services."
            />
            <InfoSection title="Terms of Use">
                <p>
                    By accessing this website, you agree to use it for lawful purposes and
                    in a way that does not affect the availability or security of our
                    services.
                </p>
                <h3>1. Service Information</h3>
                <p>
                    Content on this website is provided for general information and may be
                    updated without prior notice. We make reasonable efforts to ensure the
                    information is accurate, but no warranty is provided.
                </p>
                <h3>2. Data Protection Commitment</h3>
                <p>
                    Personal data submitted through this website is handled in
                    accordance with our Privacy Policy and applicable data
                    protection requirements, including GDPR principles and
                    Nigeria NDPA/NDPR obligations where applicable.
                </p>
                <h3>3. Third-Party Services</h3>
                <p>
                    Gue Cyber Limited is not liable for losses resulting from misuse of
                    website content, service interruptions, or third-party links.
                </p>
                <h3>4. Governing Law</h3>
                <p>
                    These terms are governed by applicable laws of the Federal
                    Republic of Nigeria, without prejudice to mandatory rights
                    available under other applicable data protection laws.
                </p>
                <h3>5. Contact</h3>
                <p>
                    Continued use of this website indicates acceptance of these terms. For
                    questions, contact info@guecyber.ng.
                </p>
            </InfoSection>
        </main>
    );
}

export default TermsPage;
