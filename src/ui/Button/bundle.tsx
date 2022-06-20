import type { ComponentProps } from 'react'

import { compose, composeU } from '@bem-react/core'

import { withSizeL } from './_size/Button_size_l'
import { withSizeM } from './_size/Button_size_m'
import { withSizeS } from './_size/Button_size_s'
import { withVariantBrand } from './_variant/Button_variant_brand'

import { Button as BaseButton } from './Button'

export const Button = compose(composeU(withSizeS, withSizeM, withSizeL), composeU(withVariantBrand))(BaseButton)

export type ButtonProps = ComponentProps<typeof Button>
