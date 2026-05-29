import { Link } from "react-router-dom";
import { resetConsentChoice } from "../utils/consent";

const footerNavs = [
    {
        label: "Resources",
        items: [
            { to: "/contact", name: "Contact" },
            { to: "/services", name: "Support" },
            { href: "https://www.guecyber.ng", name: "Documentation" },
            { href: "https://www.guecyber.ng", name: "Pricing" }
        ]
    },
    {
        label: "About",
        items: [
            { href: "https://www.guegroup.com", name: "About Gue Group" },
            { to: "/privacy", name: "Privacy" },
            { to: "/data-request", name: "Data Request" },
            { to: "/terms", name: "Terms" },
            { href: "https://www.guecyber.ng", name: "License" }
        ]
    },
    {
        label: "Explore",
        items: [
            { to: "/cbt", name: "CBT Center" },
            { to: "/training", name: "Training" },
            { to: "/services", name: "IT Services" },
            { href: "https://www.guecyber.ng", name: "Blog" }
        ]
    },
    {
        label: "Company",
        items: [
            { href: "https://www.guegroup.com", name: "Partners" },
            { href: "mailto:info@guecyber.ng", name: "Team" },
            { href: "mailto:info@guecyber.ng", name: "Careers" }
        ]
    }
];

function FooterLink({ item }) {
    if (item.to) {
        return <Link to={item.to}>{item.name}</Link>;
    }

    return (
        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
            {item.name}
        </a>
    );
}

function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-newsletter">
                    <div className="footer-newsletter-copy">
                        <h3>Get Gue Cyber updates straight to your inbox.</h3>
                        <p>Security insights, training opportunities, and product updates from our team.</p>
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
                    <p>
                        © 2026 Gue Cyber Limited. All rights reserved. Subsidiary of{" "}
                        <a href="https://www.guegroup.com" target="_blank" rel="noopener noreferrer">
                            Gue Group Limited
                        </a>
                        .
                    </p>
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            Facebook
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                            X
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            Instagram
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            GitHub
                        </a>
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
