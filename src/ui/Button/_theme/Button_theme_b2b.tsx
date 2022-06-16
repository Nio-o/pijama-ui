import { withBemMod } from '@bem-react/core'

import s from './Button_theme_b2b.module.js'

export interface ButtonThemeB2B {
  theme?: 'b2b'
}

export const withThemeB2B = withBemMod<ButtonThemeB2B>(s.Button, {
  theme: 'b2b',
})
