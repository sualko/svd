module.exports = {
  "stories": [{
    directory: '../src/',
    titlePrefix: 'SVD',
    files: '**/*.stories.@(js|jsx|ts|tsx)',
  }],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}