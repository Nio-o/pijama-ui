import type { CSSProperties } from 'react'
import React from 'react'

import { type NoStrictEntityMods, cn } from '@bem-react/classname'

import { forwardRef } from '@pijama/system'

import type { BoxWithMargin, BoxWithPadding } from './props'
import { extractStyledProps } from './props'

// import s from './Box.module.js'

export type BoxMods = BoxWithMargin & BoxWithPadding

export interface BoxProps extends BoxMods {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

const cnBox = cn('Box')

export const Box = forwardRef<BoxProps, 'div'>((props, ref): JSX.Element | null => {
  const {
    rest: { as: AsComponent = 'div', className, children, ...rest },
    styled,
  } = extractStyledProps(props)

  return (
    <AsComponent {...rest} ref={ref} className={cnBox(styled as NoStrictEntityMods, [className])}>
      {children}
    </AsComponent>
  )
})
