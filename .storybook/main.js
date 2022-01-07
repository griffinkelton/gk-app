module.exports = {
  "stories": ['../src/app/components/**/*.stories.ts'],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-zeplin/register",
    "storybook-addon-pseudo-states"
  ],

  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },

  "plugins" : [{
    "name": "@zeplin/cli-connect-storybook-plugin",
    "config": {
        "url": "http://localhost:6006", // Defaults to http://localhost:6006
        "startScript": "npm run storybook"
    }
  }]
}