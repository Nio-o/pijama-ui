/* eslint-disable @typescript-eslint/ban-types */
import type React from 'react'
import type { PropsWithoutRef, RefAttributes } from 'react'

export interface CommonPijamaProps {
  className?: string
  style?: React.CSSProperties
}

// prettier-ignore
type BaseProps<P extends {}> =
  & P
  & CommonPijamaProps;

// prettier-ignore
type OverrideProps<
  P extends {},
  E extends React.ElementType
> = (
  & BaseProps<P>
  & Omit<React.ComponentPropsWithoutRef<E>, keyof BaseProps<P>>
);

export interface PijamaComponent<T, P extends {} = {}> {
  (props: BaseProps<P>, ref?: React.ForwardedRef<T>): JSX.Element | null
}

export interface PijamaForwardRefComponent<T, P extends {} = {}> {
  (props: PropsWithoutRef<BaseProps<P>> & RefAttributes<T>): JSX.Element | null
}

export interface OverridableComponent<E extends React.ElementType, P extends {} = {}> {
  <C extends React.ElementType = E>(
    props: {
      as?: C
    } & OverrideProps<P, C>,
    ref?: React.ForwardedRef<React.ElementRef<C>>,
  ): JSX.Element | null
}

export interface OverridableForwardRefComponent<E extends React.ElementType, P extends {} = {}> {
  <C extends React.ElementType = E>(
    props: PropsWithoutRef<
      {
        as?: C
      } & OverrideProps<P, C>
    > &
      RefAttributes<React.ElementRef<C>>,
  ): JSX.Element | null
}
