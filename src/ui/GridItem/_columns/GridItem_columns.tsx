import React from 'react'

import { cn } from '@bem-react/classname'
import type { IClassNameProps } from '@bem-react/core'
import { withBemMod } from '@bem-react/core'

import s from './GridItem_columns.module.js'

export interface GridColumnsProps {
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
}

const cnColumns = cn(s.GridItem)

export const withColumns = withBemMod<GridColumnsProps, IClassNameProps>(
  s.columns,
  { columns: '*' },
  (WrappedComponent) =>
    ({ columns, className, ...props }) => {
      return <WrappedComponent className={cnColumns({ columns }, [className])} {...props} />
    },
)
