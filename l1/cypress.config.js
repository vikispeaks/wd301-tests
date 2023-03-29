const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-json-results")({
        on,
        filename: "results.json",
      });
    },
  },
});
