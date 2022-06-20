import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button'

import s from './Button_size_s.module.js'

export interface ButtonSizeSProps {
  size?: 's'
}

export const withSizeS = withBemMod<ButtonSizeSProps, ButtonProps>(s.Button, {
  size: 's',
})
