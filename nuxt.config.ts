// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-06",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-security"],
  security: {
    csrf: true,
    enabled: true,
    removeLoggers: false,
  },
});
