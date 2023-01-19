// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-windicss"],
    css: ["@/assets/style/main.scss"],
    app: {
        head: {
            bodyAttrs: {
                class: "dark",
            },
        },
    },
});
