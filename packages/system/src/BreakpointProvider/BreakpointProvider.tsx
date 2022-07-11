import type { ReactNode } from 'react'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { isSSR } from '../ssr'

export type BreakpointName = 'S' | 'M' | 'L' | 'XL'

export type Breakpoints = {
  [P in BreakpointName]: number
}

export interface BreakpointContext {
  /**
   * Matched breakpoints starting from one with minimal width. Return minimal breakpoint, when nothing matched
   *
   * @example ['S', 'M', 'L']
   * */
  matchedBreakpoints: string[]
}

const BreakpointContext = createContext<BreakpointContext | null>(null)
BreakpointContext.displayName = 'BreakpointContext'

const DEFAULT_BREAKPOINTS: Breakpoints = {
  S: 360,
  M: 1280,
  L: 1440,
  XL: 1920,
}

const FALLBACK_BREAKPOINT: keyof Breakpoints = 'S'

const useMatchedBreakpoints = (breakpoints: Breakpoints): string[] => {
  const sortedDescBreakpoints = useMemo<[breakpointName: string, breakpointValue: number][]>(
    () => Object.entries(breakpoints).sort(([, valueA], [, valueB]) => valueB - valueA),
    [breakpoints],
  )
  const breakpointQueries = sortedDescBreakpoints.map(([, value]) => `(min-width: ${value}px)`)

  const supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
  const getMatchedBreakpoints = () => {
    const matched = []
    for (const i in breakpointQueries) {
      const query = breakpointQueries[i]
      if (window.matchMedia(query).matches) {
        matched.push(sortedDescBreakpoints[i][0])
      }
    }

    if (matched.length === 0) {
      return [FALLBACK_BREAKPOINT]
    }

    return matched
  }

  const [matchedBreakPoints, setMatchedBreakpoint] = useState(() =>
    supportsMatchMedia ? getMatchedBreakpoints() : [FALLBACK_BREAKPOINT],
  )

  useEffect(() => {
    if (!supportsMatchMedia) {
      return
    }

    const onResize = () => {
      const newBreakpoints = getMatchedBreakpoints()

      setMatchedBreakpoint((previousBreakpoints) => {
        // Avoid unnecessary state update
        const areBreakpointsDifferent =
          previousBreakpoints.length !== newBreakpoints.length ||
          previousBreakpoints.some((breakpoint, idx) => breakpoint !== newBreakpoints[idx])

        return areBreakpointsDifferent ? [...newBreakpoints] : previousBreakpoints
      })
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [supportsMatchMedia])

  // If in SSR, the media query should never match. Once the page hydrates,
  // this will update and the real value will be returned.
  return isSSR() ? [FALLBACK_BREAKPOINT] : matchedBreakPoints
}

export interface BreakpointProviderProps {
  children?: ReactNode

  /**
   * Override default breakpoints
   */
  breakpoints?: Breakpoints
}

export const BreakpointProvider = ({ children, breakpoints = DEFAULT_BREAKPOINTS }: BreakpointProviderProps) => {
  const matchedBreakpoints = useMatchedBreakpoints(breakpoints)
  return <BreakpointContext.Provider value={{ matchedBreakpoints }}>{children}</BreakpointContext.Provider>
}

export const useBreakpoint = (): BreakpointContext => {
  const ctx = useContext(BreakpointContext)

  if (!ctx) {
    throw new Error('BreakpointContext not found. Check that you wrapped your component within BreakpointContext')
  }

  return ctx
}
