// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        "@pinia/nuxt",
        "@unocss/nuxt",
        "@nuxt/image",
        "nuxt-icon",
        "@nuxt/content",
        "nuxt-typed-router",
        "@vueuse/nuxt",

    ],
    pages: true,
    css: [
        "~/assets/css/style.scss",
    ]
});
