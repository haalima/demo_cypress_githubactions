const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
baseUrl: 'https://practice.automationtesteracademy.com',
//baseUrl: 'https://reqres.in',
defaultCommandTimeout: 5000
  },
});
