export default defineNuxtConfig({
    ssr: true,
    modules: ["@pinia/nuxt", "nuxt-icon", "@nuxtjs/color-mode", "@nuxt/content", "@vueuse/nuxt", "nuxt-windicss", "@nuxtjs/supabase", "nuxt-og-image", "@nuxtjs/google-adsense"],
    colorMode: {
        preference: "dark",
        classSuffix: "",
        fallback: "dark",
        storageKey: "brojenuel-color-mode",
    },
    // Recommended
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://brojenuel.com",
        },
    },
    css: ["@/assets/style/main.scss", "highlight.js/scss/agate.scss"],
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/img/icons/favicon-32x32.png",
                },
            ],
        },
    },
    content: {
        highlight: {
            // Theme used in all color schemes.
            theme: {
                // Default theme (same as single string)
                default: "github-light",
                // Theme used if `html.dark`
                dark: "github-dark",
                // Theme used if `html.sepia`
                sepia: "solarized-light",
            },
            preload: ["c", "cpp", "java"],
        },
    },
    "google-adsense": {
        id: "ca-pub-2268807726840190",
    },
});
