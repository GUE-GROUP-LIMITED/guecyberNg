import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Adds "revealed" class to the returned ref's element when it enters the viewport.
 * @param {object} options
 * @param {number} options.threshold - 0-1, how much of the element must be visible. Default 0.12
 * @param {string} options.rootMargin - Margin around viewport. Default "0px 0px -40px 0px"
 */
export function useInView({ threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.unobserve(el); // only animate once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}

/**
 * Applies scroll-reveal to all `.reveal`, `.reveal-left`, `.reveal-right`
 * elements within a given container (or document). Call once at app level.
 */
export function initScrollReveal() {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observe = () => {
        document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
            observer.observe(el);
        });
    };

    observe();

    // Re-scan after route changes / lazy-loaded content
    const mutationObserver = new MutationObserver(() => {
        document.querySelectorAll(".reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)").forEach((el) => {
            observer.observe(el);
        });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
        observer.disconnect();
        mutationObserver.disconnect();
    };
}
