import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withDefaultTheme } from './decorators/withDefaultTheme'
import { withStrictMode } from './decorators/withStrictMode'

export const decorators = [withStrictMode, withDefaultTheme]

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
