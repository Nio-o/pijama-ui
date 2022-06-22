import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent'

import s from './GridItem.module.js'

export interface GridItemProps extends CommonPijamaProps {
  className?: string
  testId?: string
  children?: React.ReactNode
  columns?: string
}

const cnGridItem = cn(s.GridItem)

export const GridItem = ({ className, testId, children }: GridItemProps): JSX.Element => {
  const Component = 'div'
  return (
    <Component data-testid={testId} className={cnGridItem(null, [className])}>
      {children}
    </Component>
  )
}
