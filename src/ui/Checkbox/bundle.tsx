import type { ComponentProps } from 'react'

import { compose, composeU } from '@bem-react/core'

import { withVariantBrand } from './_variant/Checkbox_variant_brand'

import { Checkbox as BaseCheckbox } from './Checkbox'

export const Checkbox = compose(composeU(withVariantBrand))(BaseCheckbox)

export type CheckboxProps = ComponentProps<typeof Checkbox>
