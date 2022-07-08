/* eslint-disable @typescript-eslint/ban-types */
// Credits to Chakra-UI
import type React from 'react'

export type As = React.ElementType

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

export type WithoutChildren<T> = T extends {} ? Omit<T, 'children'> : {}

export type ComponentWithAs<Component extends As, Props extends {} = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<WithoutChildren<React.ComponentProps<AsComponent>>, Props, AsComponent>,
  ): JSX.Element

  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export type PijamaComponent<T extends As, P = {}> = ComponentWithAs<T, P>
