/* eslint-disable @typescript-eslint/ban-types */
/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 *
 * + Chakra-UI
 */
import React from 'react'

import type { As, PijamaComponent, PijamaProps, PropsOf, RightJoinProps } from '../system/types'

export function forwardRef<Props extends {}, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As
    } & PijamaProps
  >,
) {
  return React.forwardRef(component) as unknown as PijamaComponent<Component, Props>
}
