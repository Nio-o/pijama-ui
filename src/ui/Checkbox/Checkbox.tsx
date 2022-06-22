import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent.js'

import s from './Checkbox.module.js'

export interface CheckboxProps extends CommonPijamaProps {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  error?: boolean
  testId?: string
  name?: string
}

const cnCheckbox = cn(s.checkbox)

export const Checkbox = ({
  children,
  className,
  name,
  testId,
  checked = false,
  disabled = false,
  error = false,
}: CheckboxProps): JSX.Element => {
  return (
    <label className={cnCheckbox(undefined, [className])} data-test-id={testId}>
      <input type="checkbox" checked={checked} disabled={disabled} aria-error={error} name={name} />
      <span className={s.checkmark} />
      {children}
    </label>
  )
}
