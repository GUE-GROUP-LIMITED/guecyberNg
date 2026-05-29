import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function upsertMeta(selector, attrs) {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
    }

    Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}

function upsertCanonical(href) {
    let link = document.head.querySelector("link[rel='canonical']");

    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
    }

    link.setAttribute("href", href);
}

function Seo({ title, description, image, noIndex = false }) {
    const location = useLocation();

    useEffect(() => {
        const configuredBase = import.meta.env.VITE_SITE_URL;
        const runtimeBase = window.location.origin;
        const siteBase = (configuredBase || runtimeBase).replace(/\/$/, "");
        const path = location.pathname || "/";
        const canonicalUrl = `${siteBase}${path}`;
        const defaultImage = "/social-preview.svg";
        const imageInput = image || defaultImage;
        const imageUrl = imageInput.startsWith("http") ? imageInput : `${siteBase}${imageInput}`;

        if (title) {
            document.title = title;

            upsertMeta("meta[property='og:title']", {
                property: "og:title",
                content: title
            });

            upsertMeta("meta[name='twitter:title']", {
                name: "twitter:title",
                content: title
            });
        }

        if (description) {
            upsertMeta("meta[name='description']", {
                name: "description",
                content: description
            });

            upsertMeta("meta[property='og:description']", {
                property: "og:description",
                content: description
            });

            upsertMeta("meta[name='twitter:description']", {
                name: "twitter:description",
                content: description
            });
        }

        upsertCanonical(canonicalUrl);

        upsertMeta("meta[property='og:type']", {
            property: "og:type",
            content: "website"
        });

        upsertMeta("meta[property='og:url']", {
            property: "og:url",
            content: canonicalUrl
        });

        upsertMeta("meta[property='og:site_name']", {
            property: "og:site_name",
            content: "Gue Cyber Limited"
        });

        upsertMeta("meta[name='twitter:card']", {
            name: "twitter:card",
            content: "summary_large_image"
        });

        upsertMeta("meta[name='robots']", {
            name: "robots",
            content: noIndex ? "noindex,nofollow" : "index,follow"
        });

        upsertMeta("meta[property='og:image']", {
            property: "og:image",
            content: imageUrl
        });

        upsertMeta("meta[name='twitter:image']", {
            name: "twitter:image",
            content: imageUrl
        });
    }, [title, description, image, noIndex, location.pathname]);

    return null;
}

export default Seo;
