import React from 'react'

import { withBemMod } from '@bem-react/core'

import s from './Text_weight_normal.module.js'

export interface TextWeightNormalProps {
  weight?: 'normal'
}

export const withWeightNormal = withBemMod<TextWeightNormalProps>(
  s.Text,
  {
    weight: 'normal',
  },
  (WrappedComponent) =>
    ({ weight: _weight, ...props }) =>
      <WrappedComponent {...props} />,
)
