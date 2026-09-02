import {
    ShieldCheck,
    Clock,
    Globe,
    Monitor,
    TrendingUp,
    Building2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   The hex badges that ring the centre piece
───────────────────────────────────────────── */
const HEX_ITEMS = [
    {
        id: "top",
        Icon: Clock,
        label: "15+ Years",
        sub: "In the Field",
        color: "#E8614D",
        bg: "rgba(232,97,77,0.12)",
        pos: { top: "0%", left: "50%", transform: "translateX(-50%)" },
    },
    {
        id: "left",
        Icon: TrendingUp,
        label: "RC 8341363",
        sub: "CAC Registered",
        color: "#3b82f6",
        bg: "rgba(59,130,246,0.12)",
        pos: { top: "50%", left: "8%", transform: "translateY(-50%)" },
    },
    {
        id: "right",
        Icon: Globe,
        label: "Benue State",
        sub: "Base of Ops",
        color: "#10b981",
        bg: "rgba(16,185,129,0.12)",
        pos: { top: "50%", right: "8%", transform: "translateY(-50%)" },
    },
    {
        id: "bottom",
        Icon: Monitor,
        label: "JAMB · WAEC · NECO",
        sub: "CBT Support",
        color: "#a855f7",
        bg: "rgba(168,85,247,0.12)",
        pos: { bottom: "0%", left: "50%", transform: "translateX(-50%)" },
    },
];

/* SVG lines connecting the badges */
function ConnectingLines() {
    return (
        <svg
            viewBox="0 0 600 520"
            className="hex-cluster-lines"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* vertical top to center */}
            <line x1="300" y1="118" x2="300" y2="210" stroke="rgba(232,97,77,0.25)" strokeWidth="1" strokeDasharray="5 5" />
            {/* vertical center to bottom */}
            <line x1="300" y1="310" x2="300" y2="402" stroke="rgba(168,85,247,0.25)" strokeWidth="1" strokeDasharray="5 5" />
            {/* left to center */}
            <line x1="152" y1="260" x2="226" y2="260" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="5 5" />
            {/* center to right */}
            <line x1="374" y1="260" x2="448" y2="260" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
    );
}

function HexBadge({ Icon, label, sub, color, bg, pos, isCenter }) {
    const size = isCenter ? 170 : 150;
    return (
        <div
            className={`hex-badge${isCenter ? " hex-badge-center" : ""} reveal-scale`}
            style={{
                position: "absolute",
                width: size,
                height: Math.round(size * 1.155),
                ...pos,
            }}
            aria-label={`${label} — ${sub}`}
        >
            {/* hex clip wrapper */}
            <div
                className="hex-inner"
                style={{ background: isCenter ? "rgba(249,197,176,0.35)" : bg }}
            >
                <div className="hex-icon" style={{ color }}>
                    <Icon size={isCenter ? 28 : 22} strokeWidth={1.6} />
                </div>
                <p className="hex-label" style={{ color: isCenter ? "var(--coral)" : "var(--ink)" }}>
                    {label}
                </p>
                <p className="hex-sub">{sub}</p>
            </div>
        </div>
    );
}

function AboutCluster() {
    return (
        <div className="hex-cluster-wrap">
            {/* SVG connecting lines sit behind badges */}
            <ConnectingLines />

            {/* Surrounding badges */}
            {HEX_ITEMS.map((item) => (
                <HexBadge key={item.id} {...item} />
            ))}

            {/* Centre badge */}
            <HexBadge
                Icon={ShieldCheck}
                label="Gue Cyber"
                sub="Limited"
                color="var(--coral)"
                bg="rgba(249,197,176,0.4)"
                isCenter
                pos={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
        </div>
    );
}

export default AboutCluster;
