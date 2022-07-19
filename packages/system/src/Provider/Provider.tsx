import type { ReactNode } from 'react'
import React from 'react'

import { BreakpointProvider } from '../BreakpointProvider'

export interface PijamaProviderProps {
  children?: ReactNode
}

export const Provider = ({ children }: PijamaProviderProps) => {
  return <BreakpointProvider>{children}</BreakpointProvider>
}
