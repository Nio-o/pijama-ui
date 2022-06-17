import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button.js'

import s from './Button_size_m.module.js'

export interface ButtonSizeMProps {
  size?: 'm'
}

export const withSizeM = withBemMod<ButtonSizeMProps, ButtonProps>(s.Button, {
  size: 'm',
})
