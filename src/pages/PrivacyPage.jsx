import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function PrivacyPage() {
    return (
        <main>
            <Seo
                title="Privacy Policy | Gue Cyber Limited"
                description="Read the Gue Cyber Limited privacy policy on how contact and service enquiry data is handled."
            />
            <InfoSection title="Privacy Policy">
                <p>
                    Gue Cyber Limited respects your privacy and processes personal
                    data in line with applicable laws, including the General Data
                    Protection Regulation (GDPR), the Nigeria Data Protection Act
                    2023 (NDPA), and the Nigeria Data Protection Regulation (NDPR)
                    where applicable.
                </p>
                <h3>1. Data We Collect</h3>
                <p>
                    We may collect your name, email address, phone number,
                    service enquiry details, and communications you submit via
                    forms on this website.
                </p>
                <h3>2. Lawful Basis and Purpose</h3>
                <p>
                    We process your data based on consent, contract-related
                    communication, and legitimate interests in delivering secure
                    IT services and responding to your requests.
                </p>
                <h3>3. Data Sharing and Transfers</h3>
                <p>
                    We do not sell personal data. Data may be processed by trusted
                    service providers that help us operate communication and web
                    infrastructure. Where cross-border processing occurs, we apply
                    reasonable safeguards appropriate to the transfer.
                </p>
                <h3>4. Retention</h3>
                <p>
                    We keep personal data only for as long as needed for support,
                    legal, and operational purposes, then securely delete or
                    anonymize it.
                </p>
                <h3>5. Your Rights</h3>
                <p>
                    Depending on your location, you may request access,
                    correction, deletion, restriction, portability, objection,
                    and withdrawal of consent. You may also file complaints with
                    a relevant supervisory authority.
                </p>
                <h3>6. Contact for Privacy Requests</h3>
                <p>
                    For data protection requests and enquiries, email
                    info@guecyber.ng. We will respond within timelines required by
                    applicable law.
                </p>
                <p>
                    Last updated: 29 May 2026.
                </p>
            </InfoSection>
        </main>
    );
}

export default PrivacyPage;
