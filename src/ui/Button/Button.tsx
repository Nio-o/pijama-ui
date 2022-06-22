import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent'

import s from './Button.module.js'

export interface ButtonProps extends CommonPijamaProps {
  children?: React.ReactNode
  as?: keyof React.ReactHTML
  disabled?: boolean
}

const cnButton = cn(s.Button)

export const Button = ({
  as: AsComponent = 'button',
  children,
  className,
  disabled = false,
  style,
}: ButtonProps): JSX.Element => {
  return (
    <AsComponent
      aria-disabled={disabled}
      style={style}
      disabled={AsComponent === 'button' ? disabled : undefined}
      className={cnButton(undefined, [className])}
    >
      {children}
    </AsComponent>
  )
}
