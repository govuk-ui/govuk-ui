module.exports = {
  "stories": [
    "../src/**/Introduction.mdx", // Default story to load
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/**/*.mdx',
  ],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  "features": {
    "storyStoreV7": true
  },
  staticDirs: ['../src/assets'],
};
