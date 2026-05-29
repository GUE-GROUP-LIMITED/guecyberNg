function BackgroundPaths({ eyebrow, title, subtitle, actions }) {
    return (
        <header id="top" className="hero hero-paths">
            <svg className="hero-paths-svg" viewBox="0 0 1400 620" aria-hidden="true" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="pathGlowA" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f8fbff" />
                        <stop offset="55%" stopColor="#7cc4ff" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="pathGlowB" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#9ad8ff" />
                        <stop offset="60%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#83b9ff" />
                    </linearGradient>
                </defs>
                <path d="M-80 420 C 180 340, 340 220, 560 260 C 760 300, 980 220, 1280 120" />
                <path d="M-120 320 C 120 250, 260 170, 470 210 C 690 250, 900 200, 1250 60" />
                <path d="M-40 500 C 220 420, 420 330, 620 360 C 860 390, 1060 310, 1320 220" />
                <path d="M-140 250 C 80 170, 260 120, 460 150 C 720 190, 980 100, 1320 10" />
                <path d="M-100 540 C 200 470, 400 400, 610 420 C 870 450, 1050 410, 1320 320" />
                <path d="M-160 170 C 140 60, 360 70, 640 120 C 880 160, 1120 90, 1460 -40" />
                <path d="M-120 600 C 260 520, 520 430, 760 450 C 1010 470, 1210 430, 1460 330" />
                <path d="M20 560 C 260 470, 440 390, 680 410 C 940 430, 1140 360, 1450 250" />

                <path className="hero-path-highlight" d="M-90 455 C 150 350, 320 250, 560 290 C 800 330, 1040 250, 1350 130" />
                <path className="hero-path-highlight hero-path-highlight-b" d="M-120 350 C 120 250, 330 170, 560 210 C 780 250, 1000 180, 1370 40" />
            </svg>

            <div className="hero-paths-blob hero-paths-blob-a" aria-hidden="true" />
            <div className="hero-paths-blob hero-paths-blob-b" aria-hidden="true" />
            <div className="hero-paths-blob hero-paths-blob-c" aria-hidden="true" />

            <div className="hero-content hero-paths-content">
                {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                <h1>{title}</h1>
                {subtitle ? <p className="hero-subtitle">{subtitle}</p> : null}
                {actions ? <div className="hero-actions">{actions}</div> : null}
            </div>

            <div className="hero-glow" aria-hidden="true" />
        </header>
    );
}

export default BackgroundPaths;
