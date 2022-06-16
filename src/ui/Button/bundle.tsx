import { compose } from '@bem-react/core'

import { withThemeB2B } from './_theme/Button_theme_b2b'
import { Button as BaseButton } from './Button'

export const Button = compose(withThemeB2B)(BaseButton)
