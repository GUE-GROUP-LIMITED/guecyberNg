import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFoundPage() {
    return (
        <main>
            <Seo
                title="Page Not Found | Gue Cyber Limited"
                description="The page you requested could not be found. Navigate back to the Gue Cyber Limited homepage."
                noIndex
            />
            <section className="section">
                <div className="container not-found">
                    <h1>Page Not Found</h1>
                    <p>The page you requested does not exist.</p>
                    <Link className="btn btn-primary" to="/">
                        Return Home
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default NotFoundPage;
