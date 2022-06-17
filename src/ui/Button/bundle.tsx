import { compose, composeU } from '@bem-react/core'

import { withThemeB2B } from './_theme/Button_theme_b2b'
import { withTypeLink } from './_type/Button_type_link'

import { Button as BaseButton } from './Button'

export const Button = compose(composeU(withThemeB2B), composeU(withTypeLink))(BaseButton)
