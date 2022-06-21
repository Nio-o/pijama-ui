import React from 'react'

import { withBemMod } from '@bem-react/core'

import s from './Text_weight_light.module.js'

export interface TextWeightLightProps {
  weight?: 'light'
}

export const withWeightLight = withBemMod<TextWeightLightProps>(
  s.Text,
  {
    weight: 'light',
  },
  (WrappedComponent) =>
    ({ weight: _weight, ...props }) =>
      <WrappedComponent {...props} />,
)
