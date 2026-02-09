// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/scripts",
        "@nuxt/test-utils",
        "@nuxt/ui",
    ],
     vite: {
      plugins: [
        tailwindcss(),
      ],
    },
    css: ['./app/assets/css/main.css'],
    devtools: { enabled: true },
    // app: {
    //     head: {
    //         htmlAttrs: {
    //             style: "background-color:#111;color: #f0f0f0" },
    //     },
    // },
    compatibilityDate: "2025-07-15",
    eslint: {
        config: {
            stylistic: {
                semi: true,
                quotes: "double",
                commaDangle: "always-multiline",
                indent: 4,
            },
        },
    },
});
