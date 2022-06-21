/* eslint-disable @typescript-eslint/ban-types */
import type { ComponentType, ElementType, ReactElement } from 'react'
import React from 'react'

import { cn } from '@bem-react/classname'
import type { Composition } from '@bem-react/core'

import s from './Text.module.js'

export type TextElementType = ElementType | ComponentType

export type TextOwnProps<T extends TextElementType> = {
  as?: T
  className?: string
  children?: React.ReactNode

  testId?: string
}

export type TextProps<T extends TextElementType> = TextOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>

export type TextType<P = {}> = {
  <T extends TextElementType>(props: TextProps<T> & P): ReactElement | null
}

const cnText = cn(s.Text)

export const Text = <T extends TextElementType = 'span'>({
  as,
  className,
  testId,
  ...props
}: TextProps<T>): ReactElement | null => {
  const Component = as || 'span'
  return <Component className={cnText(null, [className])} data-testid={testId} {...props} />
}

export function enhanceText<H extends Composition<any>, P = {}>(
  hoc: H,
  Comp?: TextType<P>,
): TextType<P & (H extends Composition<infer T> ? T : never)> {
  return hoc(Comp || Text) as any
}
