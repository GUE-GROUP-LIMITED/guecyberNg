import { Link } from "react-router-dom";
import BackgroundPaths from "./BackgroundPaths";

function HeroSection({ eyebrow, title, subtitle, actions }) {
    const resolvedEyebrow = eyebrow ?? "Gue Cyber Limited";
    const resolvedTitle = title ?? "Empowering Businesses Through Technology";
    const resolvedSubtitle = subtitle ?? "IT Support · Cybersecurity · Printing · CBT Solutions · Cloud & DevOps";

    return (
        <BackgroundPaths
            eyebrow={resolvedEyebrow}
            title={resolvedTitle}
            subtitle={resolvedSubtitle}
            actions={
                actions ??
                <>
                    <Link className="btn btn-primary" to="/contact">
                        Contact Us
                    </Link>
                    <Link className="btn btn-ghost" to="/services">
                        View Services
                    </Link>
                </>
            }
        />
    );
}

export default HeroSection;
