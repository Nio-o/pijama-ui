/* eslint-disable @typescript-eslint/ban-types */
import type React from 'react'
import type { ReactNode } from 'react'

interface OverridableTypeMap {
  props: {}
  defaultComponent: React.ElementType
}

export interface WithChildrenProp {
  children?: ReactNode
}

export interface CommonPijamaProps {
  className?: string
  style?: React.CSSProperties
}

// prettier-ignore
type BaseProps<M extends OverridableTypeMap> =
  & M['props']
  & CommonPijamaProps;

// prettier-ignore
type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = (
  & BaseProps<M>
  & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseProps<M>>
  & { ref?: React.Ref<React.ElementRef<C>> }
);

export interface PijamaComponent<P extends {} = {}> {
  (props: P & CommonPijamaProps): JSX.Element | null
}

export interface PijamaComponentWithRef<T, P extends {} = {}> {
  (props: P & CommonPijamaProps, ref?: React.ForwardedRef<T>): JSX.Element | null
}

export interface OverridableComponent<D extends React.ElementType, P extends {} = {}> {
  <C extends React.ElementType = D>(
    props: {
      as?: C
    } & OverrideProps<{ props: P; defaultComponent: D }, C>,
    ref?: React.ForwardedRef<React.ElementRef<C>>,
  ): JSX.Element | null
}
