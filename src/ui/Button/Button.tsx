import React from 'react'

import { cn } from '@bem-react/classname'

import s from './Button.module.js'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
}

interface ButtonInternalProps {
  as?: 'div' | 'a'
}

const cnButton = cn(s.Button)

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    as: AsComponent = 'div',
    children,
    className,
  } = props as ButtonProps & ButtonInternalProps
  return <AsComponent className={cnButton(undefined, [className])}>{children}</AsComponent>
}
