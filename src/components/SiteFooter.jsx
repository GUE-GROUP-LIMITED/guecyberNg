import { Link } from "react-router-dom";
import { resetConsentChoice } from "../utils/consent";

const footerNavs = [
    {
        label: "Services",
        items: [
            { to: "/services", name: "Cybersecurity Training" },
            { to: "/services", name: "Phishing Awareness" },
            { to: "/services", name: "IT Support" },
            { to: "/services", name: "Printing & Graphics" },
        ]
    },
    {
        label: "Programmes",
        items: [
            { to: "/training", name: "Training" },
            { to: "/cbt", name: "CBT Center" },
            { to: "/training", name: "Digital Skills" },
            { to: "/training", name: "CBT Preparation" },
        ]
    },
    {
        label: "Company",
        items: [
            { href: "https://www.guegroup.com", name: "Gue Group Limited" },
            { href: "https://insights.guecyber.com", name: "GueInsight Platform" },
            { to: "/contact", name: "Contact Us" },
        ]
    },
    {
        label: "Legal",
        items: [
            { to: "/privacy", name: "Privacy Policy" },
            { to: "/data-request", name: "Data Request" },
            { to: "/terms", name: "Terms of Service" },
        ]
    }
];

function FooterLink({ item }) {
    if (item.to) {
        return <Link to={item.to}>{item.name}</Link>;
    }
    return (
        <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {item.name}
        </a>
    );
}

function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-brand">
                    <Link to="/" className="footer-brand-link" aria-label="Gue Cyber home">
                        <img src="/guecyber%20.png" alt="Gue Cyber logo" className="footer-brand-logo" />
                        <div className="footer-brand-text">
                            <strong>Gue Cyber Limited</strong>
                            <span>Cybersecurity, IT Support and Digital Services</span>
                        </div>
                    </Link>
                </div>

                <div className="footer-newsletter">
                    <div className="footer-newsletter-copy">
                        <h3>Stay informed on cybersecurity in Nigeria.</h3>
                        <p>Security tips, training updates, and news from Gue Cyber Limited — delivered to your inbox.</p>
                    </div>
                    <form className="footer-newsletter-form" onSubmit={(event) => event.preventDefault()}>
                        <input type="email" required placeholder="Enter your email" aria-label="Email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-links-grid">
                    {footerNavs.map((group) => (
                        <div className="footer-links-group" key={group.label}>
                            <h4>{group.label}</h4>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item.name}>
                                        <FooterLink item={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <div>
                        <p>
                            © 2026 Gue Cyber Limited (RC 8341363) · Subsidiary of{" "}
                            <a href="https://www.guegroup.com" target="_blank" rel="noopener noreferrer">
                                Gue Group Limited
                            </a>{" "}
                            (RC 7501599) · Benue State, Nigeria
                        </p>
                        <p style={{ marginTop: "0.25rem", fontSize: "0.82rem", opacity: 0.7 }}>
                            Registered under the Companies and Allied Matters Act 2020 ·{" "}
                            <a href="mailto:info@guecyber.ng">info@guecyber.ng</a>
                        </p>
                    </div>
                    <div className="footer-socials">
                        <button type="button" className="cookie-pref-btn" onClick={resetConsentChoice}>
                            Cookie Preferences
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;
