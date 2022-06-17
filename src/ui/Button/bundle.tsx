import { compose, composeU } from '@bem-react/core'

import { withSizeL } from './_size/Button_size_l'
import { withSizeM } from './_size/Button_size_m'
import { withSizeS } from './_size/Button_size_s'

import { Button as BaseButton } from './Button'

export const Button = compose(composeU(withSizeS, withSizeM, withSizeL))(BaseButton)
