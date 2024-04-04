const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gqowip',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    viewportWidth: 375, 
    viewportHeight:667,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
