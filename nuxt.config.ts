// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        hid: "run",
        src: "newrelic.js",
        defer: true,
        type: "text/javascript",
        charset: "utf-8",
      },
    ],
    },
  },
})
