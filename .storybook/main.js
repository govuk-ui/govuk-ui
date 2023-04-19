module.exports = {
  "stories": ["../src/**/Introduction.mdx",
  // Default story to load
  "../src/**/*.stories.@(js|jsx|ts|tsx)", '../src/**/*.mdx'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  staticDirs: ['../src/assets'],
  docs: {
    autodocs: false
  }
};
