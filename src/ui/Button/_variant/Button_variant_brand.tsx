import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button'

import s from './Button_variant_brand.module.js'

export interface ButtonVariantBrandProps {
  variant?: 'brand'
}

export const withVariantBrand = withBemMod<ButtonVariantBrandProps, ButtonProps>(s.Button, {
  variant: 'brand',
})
