import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button'

import s from './Button_variant_simple.module.js'

export interface ButtonVariantSimpleProps {
  variant?: 'simple'
}

export const withVariantSimple = withBemMod<ButtonVariantSimpleProps, ButtonProps>(s.Button, {
  variant: 'simple',
})
