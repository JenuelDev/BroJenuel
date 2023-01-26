// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ["nuxt-windicss", "@pinia/nuxt", "nuxt-icon", "@nuxtjs/color-mode", "@nuxt/content", "@vueuse/nuxt"],
    colorMode: {
        preference: "dark",
        classSuffix: "",
        fallback: "dark",
        storageKey: "brojenuel-color-mode",
    },
    css: ["@/assets/style/main.scss"],
    app: {
        layoutTransition: { name: "layout", mode: "out-in" },
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
});
