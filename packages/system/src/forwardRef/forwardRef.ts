/* eslint-disable @typescript-eslint/ban-types */
/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 *
 * + Chakra-UI
 */
import React from 'react'

import type { As, PijamaComponent, RightJoinProps, WithoutChildren } from '../types'

// For compatibility with React 17 and 18. React 18 requires explicit children prop
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210/files#diff-32cfd8cb197872bcba371f5018185d2e75fa540b52cda2dd7d8ac12dcc021299R531
interface ForwardRefRenderFunction<T, P = {}> {
  (props: P, ref: React.ForwardedRef<T>): React.ReactElement | null
  displayName?: string | undefined
  defaultProps?: never | undefined
  propTypes?: never | undefined
}

export function forwardRef<Props extends {}, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<WithoutChildren<React.ComponentProps<Component>>, Props> & {
      as?: As
    }
  >,
) {
  return React.forwardRef(component) as unknown as PijamaComponent<Component, Props>
}
