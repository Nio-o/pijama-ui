import { compose, composeU } from '@bem-react/core'

import { withAlign } from './_align/Text_align'
import { withTypo } from './_typo/Text_typo'
import {
  withWeightBold,
  withWeightHeavy,
  withWeightLight,
  withWeightMedium,
  withWeightNormal,
} from './_weight/Text_weight'

import { enhanceText } from './Text'

export const Text = enhanceText(
  compose(
    composeU(withWeightBold, withWeightHeavy, withWeightLight, withWeightMedium, withWeightNormal),
    withTypo,
    withAlign,
  ),
)
