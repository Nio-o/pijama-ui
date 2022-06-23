import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent'
import { useRadioContext } from './RadioGroupContext'

import s from './RadioButton.module.js'

export interface RadioButtonProps extends CommonPijamaProps {
  children?: React.ReactNode
  value: string
  disabled?: boolean
}

const cnRadioButton = cn(s.RadioBlock)

export const RadioButton = ({ className, children, value, disabled }: RadioButtonProps): JSX.Element => {
  const radioContext = useRadioContext()
  if (!radioContext) throw new Error('RadioButton must be inside RadioGroup')

  const onChange = () => {
    if (disabled) return
    radioContext.setSelectedOption(value)
  }

  return (
    <label className={cnRadioButton({ disabled }, [className])}>
      <input type="radio" checked={radioContext?.selected === value} disabled={disabled} onChange={onChange} />
      <span className={s.RadioButton} />
      {children}
    </label>
  )
}
