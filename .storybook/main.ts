import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    "autodocs": "tag"
  },
  webpackFinal: async (config: any) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            jsx: true,
          },
        }
      ],
    });

    return config;
  },
};
export default config;
