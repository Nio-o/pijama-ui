import type { ComponentType, ElementType, ReactElement } from 'react'
import React from 'react'

import { cn } from '@bem-react/classname'

import s from './Divider.module.js'

export type DividerElementType = ElementType | ComponentType

export interface DividerProps<T extends DividerElementType> {
  as?: T
  className?: string
  testId?: string
}

const cnDivider = cn(s.Divider)

export const Divider = <T extends DividerElementType = 'div'>({
  as,
  className,
  testId,
}: DividerProps<T>): ReactElement | null => {
  const Component = as || 'div'
  return <Component data-testid={testId} role="separator" className={cnDivider(null, [className])} />
}
