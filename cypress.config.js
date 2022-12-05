const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.demoblaze.com',
    api : 'https://api.demoblaze.com',
    env : {
      VALID_USER_EMAIL: 'testerbr@gmail.com',
      VALID_USER_PASSWORD: 'password',
    }
  },
});
