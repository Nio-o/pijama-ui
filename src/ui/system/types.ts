/* eslint-disable @typescript-eslint/ban-types */
// Credits to Chakra-UI
import type React from 'react'

export interface PijamaProps {
  className?: string
  style?: React.CSSProperties
}

export type As = React.ElementType

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  'as' | OmitAdditionalProps
>

export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps

export type MergeWithAs<
  AsProps extends object,
  AdditionalProps extends object,
  AsComponent extends As,
> = RightJoinProps<RightJoinProps<AsProps, AdditionalProps>, { as?: AsComponent }>

export type ComponentWithAs<Component extends As, Props extends {} = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<React.ComponentProps<AsComponent>, Props, AsComponent>,
  ): JSX.Element

  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export type PijamaComponent<T extends As, P = {}> = ComponentWithAs<T, PijamaProps & P>
