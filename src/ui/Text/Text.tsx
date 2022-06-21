import React, { forwardRef } from 'react'

import { cn } from '@bem-react/classname'

import type { OverridableComponent } from '../OverridableComponent/OverridableComponent.js'

import s from './Text.module.js'

const cnText = cn(s.Text)

const TextBase: OverridableComponent<'span'> = ({ as: Component = 'span', className, ...props }, ref) => {
  return <Component ref={ref} className={cnText(null, [className])} {...props} />
}

export const Text: OverridableComponent<'span'> = forwardRef(TextBase)
