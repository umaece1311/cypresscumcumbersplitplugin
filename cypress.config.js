const { defineConfig } = require('cypress')
const cypressSplit = require('cypress-split')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'o8bzrb',
  e2e: {
    // baseUrl, etc
    fixturesFolder:'cypress/fixtures' ,
    supportFile: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      on('file:preprocessor', cucumber())
      // IMPORTANT: return the config object
      return config
    },
    "env": {
      "url": "https://rahulshettyacademy.com"
    },
    specPattern: 'cypress/e2e/cucumber/team/Features/smoke/**/*.feature',
  },
})