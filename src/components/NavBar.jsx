import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/cbt", label: "CBT Center" },
    { to: "/training", label: "Training" },
];

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change / resize
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 820) setMenuOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <nav className="site-nav" aria-label="Primary">
            {/* Logo */}
            <div className="site-nav-left">
                <Link to="/" className="logo" aria-label="Gue Cyber home">
                    <img src="/guecyber%20.png" alt="Gue Cyber logo" className="logo-mark" />
                    <span className="logo-wordmark">GUE CYBER</span>
                </Link>
            </div>

            {/* Center nav links */}
            <div className={`site-nav-center${menuOpen ? " open" : ""}`}>
                <ul>
                    {navItems.map((item, i) => (
                        <li key={item.to}>
                            {i > 0 && <span className="nav-dot" aria-hidden="true">●</span>}
                            <NavLink
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => (isActive ? "is-active" : undefined)}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right CTA */}
            <div className="site-nav-right">
                <Link to="/contact" className="nav-cta">
                    Discuss a Project <span aria-hidden="true">↗</span>
                </Link>

                {/* Burger — mobile only */}
                <button
                    type="button"
                    className={`nav-burger${menuOpen ? " open" : ""}`}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
