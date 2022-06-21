import React from 'react'

import { cn } from '@bem-react/classname'
import type { IClassNameProps } from '@bem-react/core'
import { withBemMod } from '@bem-react/core'

import s from './Text_align.module.js'

export interface TextAlignProps {
  align?: 'start' | 'end' | 'center' | 'justify'
}

const cnText = cn(s.Text)

export const withAlign = withBemMod<TextAlignProps, IClassNameProps>(
  s.Text,
  { align: '*' },
  (WrappedComponent) =>
    ({ align, className, ...props }) => {
      return <WrappedComponent className={cnText({ align }, [className])} {...props} />
    },
)
