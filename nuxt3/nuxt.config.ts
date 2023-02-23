// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ["@pinia/nuxt", "nuxt-icon", "@nuxtjs/color-mode", "@nuxt/content", "@vueuse/nuxt", "nuxt-windicss"],
    colorMode: {
        preference: "dark",
        classSuffix: "",
        fallback: "dark",
        storageKey: "brojenuel-color-mode",
    },
    css: ["@/assets/style/main.scss"],
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
        documentDriven: true,
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
});
