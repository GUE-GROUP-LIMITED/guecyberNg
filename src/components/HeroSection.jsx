import {
    ShieldCheck,
    Monitor,
    Laptop,
    GraduationCap,
} from "lucide-react";

const PILLS = [
    { label: "Cybersecurity Training", bg: "#e9d5ff", Icon: ShieldCheck },
    { label: "IT Support",             bg: "#bfdbfe", Icon: Monitor },
    { label: "CBT Services",           bg: "#a7f3d0", Icon: Laptop },
    { label: "Digital Skills",         bg: "#fed7aa", Icon: GraduationCap },
];

function HeroSection({ eyebrow, title, subtitle, actions, titleAccent }) {
    const resolvedEyebrow  = eyebrow     ?? "Gue Cyber Limited · RC 8341363";
    const resolvedTitle    = title       ?? "Cybersecurity Training";
    const resolvedAccent   = titleAccent ?? "& IT Services";
    const resolvedSubtitle = subtitle    ?? "Practical technology services for Benue State — IT support, cybersecurity, CBT infrastructure, and digital skills training.";

    const handleScrollDown = () => {
        const main = document.querySelector("main");
        if (main) main.scrollIntoView({ behavior: "smooth" });
        else window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    };

    return (
        <div className="hero-shell">
            {/* Eyebrow pill */}
            <p className="hero-eyebrow-pill">{resolvedEyebrow}</p>

            {/* Headline */}
            <div className="hero-content">
                <h1>
                    {resolvedTitle}{" "}
                    <span className="hero-title-accent">{resolvedAccent}</span>
                </h1>
                {resolvedSubtitle && (
                    <p style={{
                        color: "rgba(26,26,46,0.72)",
                        maxWidth: "52ch",
                        margin: "0 auto 1.6rem",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                    }}>
                        {resolvedSubtitle}
                    </p>
                )}
                {actions && <div className="hero-actions">{actions}</div>}
            </div>

            {/* Blob + floating pills */}
            <div className="hero-blob-wrap">
                {/* Floating service pills */}
                <div className="hero-pills" aria-hidden="true">
                    {PILLS.map(({ label, bg, Icon }) => (
                        <div key={label} className="hero-pill">
                            <span className="hero-pill-icon" style={{ background: bg }}>
                                <Icon size={14} strokeWidth={2.2} />
                            </span>
                            {label}
                        </div>
                    ))}
                </div>

                {/* 3D morphing blob */}
                <div className="hero-blob" aria-hidden="true" />
            </div>

            {/* Diagonal wave transition to white content below */}
            <div className="hero-wave" aria-hidden="true" />

            {/* Scroll cue chevron */}
            <div className="hero-scroll-cue" aria-hidden="true">
                <button
                    type="button"
                    className="hero-scroll-chevron"
                    onClick={handleScrollDown}
                    aria-label="Scroll to content"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                            d="M2 4.5L7 9.5L12 4.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
