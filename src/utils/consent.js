export const CONSENT_STORAGE_KEY = "guecyber:consent";
export const CONSENT_EVENT = "guecyber:consent-changed";

export function getConsentChoice() {
    if (typeof window === "undefined") {
        return "unknown";
    }

    return window.localStorage.getItem(CONSENT_STORAGE_KEY) || "unknown";
}

export function hasAnalyticsConsent() {
    return getConsentChoice() === "accepted";
}

export function setConsentChoice(choice) {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

export function resetConsentChoice() {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "unknown" }));
}
