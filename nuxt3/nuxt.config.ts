// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-windicss"],
    css: ["@/assets/style/main.scss"],
    app: {
        head: {
            bodyAttrs: {
                class: "dark",
            },
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
