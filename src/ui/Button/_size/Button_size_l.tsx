import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button.js'

import s from './Button_size_l.module.js'

export interface ButtonSizeLProps {
  size?: 'l'
}

export const withSizeL = withBemMod<ButtonSizeLProps, ButtonProps>(s.Button, {
  size: 'l',
})
