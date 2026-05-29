import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CONSENT_EVENT, getConsentChoice, setConsentChoice } from "../utils/consent";

function CookieConsent() {
    const [choice, setChoice] = useState("unknown");

    useEffect(() => {
        setChoice(getConsentChoice());

        function onConsentChanged() {
            setChoice(getConsentChoice());
        }

        window.addEventListener(CONSENT_EVENT, onConsentChanged);
        window.addEventListener("storage", onConsentChanged);

        return () => {
            window.removeEventListener(CONSENT_EVENT, onConsentChanged);
            window.removeEventListener("storage", onConsentChanged);
        };
    }, []);

    if (choice !== "unknown") {
        return null;
    }

    function setAndHide(nextChoice) {
        setConsentChoice(nextChoice);
        setChoice(nextChoice);
    }

    return (
        <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent banner">
            <p>
                We use essential cookies for core site operation. Optional analytics
                cookies are enabled only with your consent. Read our <Link to="/privacy">Privacy Policy</Link>.
            </p>
            <div className="cookie-banner-actions">
                <button type="button" className="cookie-btn cookie-btn-muted" onClick={() => setAndHide("rejected")}>
                    Essential Only
                </button>
                <button type="button" className="cookie-btn cookie-btn-accept" onClick={() => setAndHide("accepted")}>
                    Accept Analytics
                </button>
            </div>
        </aside>
    );
}

export default CookieConsent;
