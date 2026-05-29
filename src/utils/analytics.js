import { hasAnalyticsConsent } from "./consent";

export function trackEvent(name, properties = {}) {
    if (typeof window === "undefined") {
        return;
    }

    if (!hasAnalyticsConsent()) {
        return;
    }

    if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: name, ...properties });
    }

    if (typeof window.gtag === "function") {
        window.gtag("event", name, properties);
    }

    if (typeof window.plausible === "function") {
        window.plausible(name, { props: properties });
    }
}

export function trackPageView(pathname) {
    trackEvent("page_view", { path: pathname });
}
