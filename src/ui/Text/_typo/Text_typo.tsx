import React from 'react'

import { cn } from '@bem-react/classname'
import type { IClassNameProps } from '@bem-react/core'
import { withBemMod } from '@bem-react/core'

import s from './Text_typo.module.js'

export interface TextTypoProps {
  typo?: 'h1' | 'h2' | 'h3' | 'h4' | 's' | 'm' | 'l' | 's-compact' | 'm-compact' | 'l-compact'
}

const cnText = cn(s.Text)

export const withTypo = withBemMod<TextTypoProps, IClassNameProps>(
  s.Text,
  { typo: '*' },
  (WrappedComponent) =>
    ({ typo, className, ...props }) => {
      return <WrappedComponent className={cnText({ typo }, [className])} {...props} />
    },
)
