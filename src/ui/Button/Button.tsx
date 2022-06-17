import React, { forwardRef } from 'react'

import { cn } from '@bem-react/classname'

import s from './Button.module.js'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  as?: 'div' | 'a'
}

const cnButton = cn(s.Button)

export const Button: React.ForwardRefExoticComponent<ButtonProps> = forwardRef(
  ({ as: AsComponent = 'div', children, className }): JSX.Element => {
    return <AsComponent className={cnButton(undefined, [className])}>{children}</AsComponent>
  },
)
