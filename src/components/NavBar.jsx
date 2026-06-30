import { Link, NavLink } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/cbt", label: "CBT Center" },
    { to: "/training", label: "Training" }
];

function NavBar() {
    return (
        <nav className="site-nav" aria-label="Primary">
            <div className="site-nav-left">
                <Link to="/" className="logo" aria-label="Gue Cyber home">
                    <img src="/guecyber%20.png" alt="Gue Cyber logo" className="logo-mark" />
                    <span className="logo-wordmark">GUE CYBER</span>
                </Link>
            </div>

            <div className="site-nav-center">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => (isActive ? "is-active" : undefined)}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="site-nav-right">
                <Link to="/contact" className="nav-link-soft nav-link-strong">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
