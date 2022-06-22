import type { ReactNode } from 'react'
import React, { useCallback, useState } from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent'

import s from './Input.module.js'

export interface InputProps extends CommonPijamaProps {
  hint?: ReactNode
  title?: ReactNode
  /**
   *
   * @default text
   */
  placeholder?: string
  /**
   *
   * @default text
   */
  type?: 'text' | 'tel' | 'password' | 'email'
  value?: string

  state?: 'error'

  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const cnInput = cn(s.Input)

export const Input = ({
  type = 'text',
  className,
  style,
  value,
  hint,
  title,
  state,
  placeholder,
  onChange,
}: InputProps): JSX.Element | null => {
  const [focused, setFocused] = useState(false)

  const onFocus = useCallback(() => setFocused(true), [])
  const onBlur = useCallback(() => setFocused(false), [])

  return (
    <div className={cnInput({ filled: Boolean(value), focused, state }, [className])} style={style}>
      {(title || title === 0) && <label className={s.Title}>{title}</label>}
      <input
        className={s.Control}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        aria-placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={s.BottomBar}>{(hint || hint === 0) && <span className={s.Hint}>{hint}</span>}</span>
    </div>
  )
}
