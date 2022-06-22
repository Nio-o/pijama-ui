import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent.js'

import s from './Checkbox.module.js'

export interface CheckboxProps extends CommonPijamaProps {
  className?: string
  checked?: boolean
  text?: string
}

const cnCheckbox = cn(s.Checkbox)

export const Checkbox = ({ text, className, checked = false }: CheckboxProps): JSX.Element => {
  return (
    <label className={cnCheckbox(undefined, [className])}>
      <input type="checkbox" checked={checked} />
      <span className={s.Checkmark} />
      <p>{text}</p>
    </label>
  )
}
