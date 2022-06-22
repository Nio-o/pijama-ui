import React from 'react'

import { cn } from '@bem-react/classname'

import type { CommonPijamaProps } from '../OverridableComponent/OverridableComponent'

import s from './Grid.module.js'

export interface GridProps extends CommonPijamaProps {
  testId?: string
  children?: React.ReactNode
}

const cnGrid = cn(s.Grid)

export const Grid = ({ className, testId, children }: GridProps): JSX.Element => {
  return (
    <div data-testid={testId} className={cnGrid(null, [className])}>
      {children}
    </div>
  )
}
