import { withBemMod } from '@bem-react/core'

import type { CheckboxProps } from '../Checkbox'

import s from './Checkbox_variant_brand.module.js'

export interface CheckboxVariantBrandProps {
  variant?: 'brand'
}

export const withVariantBrand = withBemMod<CheckboxVariantBrandProps, CheckboxProps>(s.Checkbox, {
  variant: 'brand',
})
