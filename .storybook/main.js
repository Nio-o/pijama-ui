const path = require('node:path')

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },

      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isHTMLElementProp = prop.parent?.fileName.includes('node_modules') ?? false
        return true
      },
    },
  },

  features: {
    storyStoreV7: true,
  },
}
