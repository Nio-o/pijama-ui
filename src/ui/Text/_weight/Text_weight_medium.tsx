import React from 'react'

import { withBemMod } from '@bem-react/core'

import s from './Text_weight_medium.module.js'

export interface TextWeightMediumProps {
  weight?: 'medium'
}

export const withWeightMedium = withBemMod<TextWeightMediumProps>(
  s.Text,
  {
    weight: 'medium',
  },
  (WrappedComponent) =>
    ({ weight: _weight, ...props }) =>
      <WrappedComponent {...props} />,
)
