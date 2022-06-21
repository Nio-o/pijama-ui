import React from 'react'

import { withBemMod } from '@bem-react/core'

import s from './Text_weight_heavy.module.js'

export interface TextWeightHeavyProps {
  weight?: 'heavy'
}

export const withWeightHeavy = withBemMod<TextWeightHeavyProps>(
  s.Text,
  {
    weight: 'heavy',
  },
  (WrappedComponent) =>
    ({ weight: _weight, ...props }) =>
      <WrappedComponent {...props} />,
)
