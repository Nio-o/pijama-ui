import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent.js'

import s from './Checkbox.module.js'

export interface CheckboxProps extends CommonPijamaProps {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  error?: boolean
}

const cnCheckbox = cn(s.Checkbox)

export const Checkbox = ({ children, className, checked = false, disabled = false }: CheckboxProps): JSX.Element => {
  return (
    <label className={cnCheckbox(undefined, [className])}>
      <input type="checkbox" checked={checked} disabled={disabled} />
      <span className={s.Checkmark} />
      {children}
    </label>
  )
}
