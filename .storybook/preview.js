import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { withThemes } from './decorators/withThemes'
import { withStrictMode } from './decorators/withStrictMode'

export const decorators = [withStrictMode, withThemes]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: ['default', 'formal', 'both'],
      showName: true,
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
