import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CookieConsent from "./components/CookieConsent";
import NavBar from "./components/NavBar";
import ScrollRevealInit from "./components/ScrollRevealInit";
import SiteFooter from "./components/SiteFooter";
import { trackPageView } from "./utils/analytics";

const HomePage        = lazy(() => import("./pages/HomePage"));
const ServicesPage    = lazy(() => import("./pages/ServicesPage"));
const CbtPage         = lazy(() => import("./pages/CbtPage"));
const TrainingPage    = lazy(() => import("./pages/TrainingPage"));
const ContactPage     = lazy(() => import("./pages/ContactPage"));
const ThankYouPage    = lazy(() => import("./pages/ThankYouPage"));
const PrivacyPage     = lazy(() => import("./pages/PrivacyPage"));
const DataRequestPage = lazy(() => import("./pages/DataRequestPage"));
const TermsPage       = lazy(() => import("./pages/TermsPage"));
const NotFoundPage    = lazy(() => import("./pages/NotFoundPage"));

function App() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        trackPageView(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Global scroll-reveal observer */}
            <ScrollRevealInit />

            <header className={`site-header${scrolled ? " scrolled" : ""}`}>
                <div className="container">
                    <NavBar />
                </div>
            </header>

            <div className="route-shell" key={location.pathname}>
                <Suspense
                    fallback={
                        <main className="route-loading-wrap">
                            <div className="container route-loading">Loading page…</div>
                        </main>
                    }
                >
                    <Routes location={location}>
                        <Route path="/"             element={<HomePage />} />
                        <Route path="/services"     element={<ServicesPage />} />
                        <Route path="/cbt"          element={<CbtPage />} />
                        <Route path="/training"     element={<TrainingPage />} />
                        <Route path="/contact"      element={<ContactPage />} />
                        <Route path="/thank-you"    element={<ThankYouPage />} />
                        <Route path="/privacy"      element={<PrivacyPage />} />
                        <Route path="/data-request" element={<DataRequestPage />} />
                        <Route path="/terms"        element={<TermsPage />} />
                        <Route path="*"             element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </div>

            <SiteFooter />
            <CookieConsent />
        </>
    );
}

export default App;
