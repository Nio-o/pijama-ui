/* eslint-disable @typescript-eslint/ban-types */
import type React from 'react'
import { forwardRef as reactForwardRef } from 'react'

import type {
  OverridableComponent,
  OverridableForwardRefComponent,
  PijamaComponent,
  PijamaForwardRefComponent,
} from './OverridableComponent'

export type PijamaForwardRef = {
  <RefType, Props extends {} = {}>(render: PijamaComponent<RefType, Props>): PijamaForwardRefComponent<RefType, Props>
}

export const forwardRef: PijamaForwardRef = reactForwardRef

export type PijamaForwardRefOverridable = {
  <DefaultElement extends React.ElementType, Props extends {} = {}>(
    render: OverridableComponent<DefaultElement, Props>,
  ): OverridableForwardRefComponent<DefaultElement, Props>
}

// const Text = forwardRef<'', { test: boolean }>

// TODO: how to avoid casting?
export const forwardRefOverridable: PijamaForwardRefOverridable = reactForwardRef as any
