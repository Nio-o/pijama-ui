import React from 'react'

import { withBemMod } from '@bem-react/core'

import type { ButtonProps } from '../Button.js'

import s from './Button_type_link.module.js'

export interface ButtonTypeLinkProps {
  type?: 'link'

  trash?: true
}

export const withTypeLink = withBemMod<ButtonTypeLinkProps, ButtonProps>(
  s.Button,
  {
    type: 'link',
  },
  (Button) => (props) => {
    return <Button {...props} as="a" />
  },
)
