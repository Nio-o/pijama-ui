import React from 'react'

import { cn } from '@bem-react/classname'

import s from './Button.module.js'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  /**
   * @default 'button'
   */
  as?: keyof React.ReactHTML

  /**
   *
   * test
   *
   * @default false
   */
  disabled?: boolean

  /**
   *
   * test
   *
   * @default false
   */
  variant: unknown
}

const cnButton = cn(s.Button)

export const Button = ({
  as: AsComponent = 'button',
  children,
  className,
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <AsComponent
      aria-disabled={disabled}
      disabled={AsComponent === 'button' ? disabled : undefined}
      className={cnButton(undefined, [className])}
    >
      {children}
    </AsComponent>
  )
}
