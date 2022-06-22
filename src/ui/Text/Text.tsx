import React from 'react'

import { cn } from '@bem-react/classname'

import { forwardRefOverridable } from '../OverridableComponent/forwardRef'

import s from './Text.module.js'

const cnText = cn(s.Text)

export const Text = forwardRefOverridable(({ as: Component = 'span', className, ...props }, ref) => {
  return <Component ref={ref} className={cnText(null, [className])} {...props} />
})
