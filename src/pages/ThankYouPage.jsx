import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function ThankYouPage() {
    return (
        <main>
            <Seo
                title="Thank You | Gue Cyber Limited"
                description="Thank you for contacting Gue Cyber Limited. Our team will respond shortly."
                noIndex
            />
            <section className="section">
                <div className="container not-found">
                    <h1>Thank You</h1>
                    <p>Your message has been received. Our team will get back to you shortly.</p>
                    <Link className="btn btn-primary" to="/">
                        Return Home
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default ThankYouPage;
