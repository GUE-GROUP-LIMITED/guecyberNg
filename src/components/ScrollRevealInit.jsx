import { useEffect } from "react";
import { initScrollReveal } from "../utils/useInView";

/**
 * Mounts the global scroll-reveal observer once, after the app renders.
 * Drop this into App.jsx to enable .reveal classes site-wide.
 */
function ScrollRevealInit() {
    useEffect(() => {
        const cleanup = initScrollReveal();
        return cleanup;
    }, []);

    return null;
}

export default ScrollRevealInit;
