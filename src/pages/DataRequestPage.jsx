import InfoSection from "../components/InfoSection";
import Seo from "../components/Seo";

function DataRequestPage() {
    return (
        <main>
            <Seo
                title="Data Subject Request | Gue Cyber Limited"
                description="Submit a data subject request for access, correction, deletion, portability, or objection regarding personal data processed by Gue Cyber Limited."
            />
            <InfoSection title="Data Subject Request">
                <p>
                    If you want to exercise your data protection rights, you can submit a
                    Data Subject Request (DSR) to Gue Cyber Limited.
                </p>

                <h3>Available Requests</h3>
                <p>
                    You may request access, correction, deletion, restriction,
                    portability, objection to processing, and withdrawal of consent where
                    applicable.
                </p>

                <h3>How to Submit</h3>
                <p>
                    Send an email to <a href="mailto:info@guecyber.ng">info@guecyber.ng</a>
                    {" "}with subject line "Data Subject Request" and include:
                </p>
                <p>1. Your full name and contact email.</p>
                <p>2. The specific request type.</p>
                <p>3. Enough detail for us to identify the relevant records.</p>

                <h3>Response Timeline</h3>
                <p>
                    We aim to acknowledge requests promptly and respond within timelines
                    required by applicable law.
                </p>
            </InfoSection>
        </main>
    );
}

export default DataRequestPage;
