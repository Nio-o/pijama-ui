import React from 'react'

import { withBemMod } from '@bem-react/core'

import s from './Text_weight_bold.module.js'

export interface TextWeightBoldProps {
  weight?: 'bold'
}

export const withWeightBold = withBemMod<TextWeightBoldProps>(
  s.Text,
  {
    weight: 'bold',
  },
  (WrappedComponent) =>
    ({ weight: _weight, ...props }) =>
      <WrappedComponent {...props} />,
)
