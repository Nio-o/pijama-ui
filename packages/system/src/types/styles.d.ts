import { DimensionValue } from './styleValues'

export type ResponsiveProp<T> = {
  base?: T
  S?: T
  M?: T
  L?: T
}

export type Responsive<T> = T | ResponsiveProp<T>

export interface StyleProps {
  /** The margin for all four sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin). */
  margin?: Responsive<DimensionValue>
  // /** The margin for the left side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left). Consider using `marginStart` instead for RTL support. */
  marginLeft?: Responsive<DimensionValue>
  // /** The margin for the right side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left). Consider using `marginEnd` instead for RTL support. */
  marginRight?: Responsive<DimensionValue>
  /** The margin for the top side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top). */
  marginTop?: Responsive<DimensionValue>
  /** The margin for the bottom side of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom). */
  marginBottom?: Responsive<DimensionValue>
  /** The margin for both the left and right sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin). */
  marginX?: Responsive<DimensionValue>
  /** The margin for both the top and bottom sides of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin). */
  marginY?: Responsive<DimensionValue>

  /** The width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/width). */
  width?: Responsive<DimensionValue>
  /** The height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height). */
  height?: Responsive<DimensionValue>
  /** The minimum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width). */
  minWidth?: Responsive<DimensionValue>
  /** The minimum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height). */
  minHeight?: Responsive<DimensionValue>
  /** The maximum width of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width). */
  maxWidth?: Responsive<DimensionValue>
  /** The maximum height of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height). */
  maxHeight?: Responsive<DimensionValue>

  /** When used in a flex layout, specifies how the element will grow or shrink to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex). */
  flex?: Responsive<string | number | boolean>
  /** When used in a flex layout, specifies how the element will grow to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow). */
  flexGrow?: Responsive<number>
  /** When used in a flex layout, specifies how the element will shrink to fit the space available. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink). */
  flexShrink?: Responsive<number>
  /** When used in a flex layout, specifies the initial main size of the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis). */
  flexBasis?: Responsive<number | string>
  /** Specifies how the element is justified inside a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self). */
  justifySelf?: Responsive<
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'center'
    | 'left'
    | 'right'
    | 'stretch'
  >
  /** Overrides the `alignItems` property of a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self). */
  alignSelf?: Responsive<
    'auto' | 'normal' | 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'stretch'
  >
  /** The layout order for the element within a flex or grid container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/order). */
  order?: Responsive<number>

  /** When used in a grid layout, specifies the named grid area that the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area). */
  gridArea?: Responsive<string>
  /** When used in a grid layout, specifies the column the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column). */
  gridColumn?: Responsive<string>
  /** When used in a grid layout, specifies the row the element should be placed in within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row). */
  gridRow?: Responsive<string>
  /** When used in a grid layout, specifies the starting column to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start). */
  gridColumnStart?: Responsive<string>
  /** When used in a grid layout, specifies the ending column to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end). */
  gridColumnEnd?: Responsive<string>
  /** When used in a grid layout, specifies the starting row to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start). */
  gridRowStart?: Responsive<string>
  /** When used in a grid layout, specifies the ending row to span within the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end). */
  gridRowEnd?: Responsive<string>

  /** Specifies how the element is positioned. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position). */
  position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>
  /** The stacking order for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index). */
  zIndex?: Responsive<number>
  /** The top position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/top). */
  top?: Responsive<DimensionValue>
  /** The bottom position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom). */
  bottom?: Responsive<DimensionValue>
  /** The logical start position for the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start). */
  start?: Responsive<DimensionValue>
  /** The logical end position for the element, depending on layout direction. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end). */
  end?: Responsive<DimensionValue>
  /** The left position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/left). Consider using `start` instead for RTL support. */
  left?: Responsive<DimensionValue>
  /** The right position for the element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/right). Consider using `start` instead for RTL support. */
  right?: Responsive<DimensionValue>

  /** Hides the element. */
  isHidden?: Responsive<boolean>
}

export interface BoxAlignmentStyleProps {
  /**
   * The distribution of space around items along the main axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   * @default 'stretch'
   */
  justifyContent?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >
  /**
   * The distribution of space around child items along the cross axis. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
   * @default 'start'
   */
  alignContent?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >
  /**
   * The alignment of children within their container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
   * @default 'stretch'
   */
  alignItems?: Responsive<
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  >
  /** The space to display between both rows and columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap). */
  gap?: Responsive<DimensionValue>
  /** The space to display between columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap). */
  columnGap?: Responsive<DimensionValue>
  /** The space to display between rows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap). */
  rowGap?: Responsive<DimensionValue>
}

export interface FlexStyleProps extends BoxAlignmentStyleProps, StyleProps {
  /**
   * The direction in which to layout children. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
   * @default 'row'
   */
  direction?: Responsive<'row' | 'column' | 'row-reverse' | 'column-reverse'>
  /**
   * Whether to wrap items onto multiple lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
   * @default false
   */
  wrap?: Responsive<boolean | 'wrap' | 'nowrap' | 'wrap-reverse'>
}

export interface GridStyleProps extends BoxAlignmentStyleProps, StyleProps {
  /** Defines named grid areas. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas). */
  areas?: Responsive<string[]>
  /** Defines the sizes of each row in the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows). */
  rows?: Responsive<string | DimensionValue[]>
  /** Defines the sizes of each column in the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns). */
  columns?: Responsive<string | DimensionValue[]>
  /** Defines the size of implicitly generated columns. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns). */
  autoColumns?: Responsive<DimensionValue>
  /** Defines the size of implicitly generated rows. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows). */
  autoRows?: Responsive<DimensionValue>
  /** Controls how auto-placed items are flowed into the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow). */
  autoFlow?: Responsive<'row' | 'column' | 'row dense' | 'column dense'>
  /** Defines the default `justifySelf` for all items in the grid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items). */
  justifyItems?: Responsive<
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'legacy right'
    | 'legacy left'
    | 'legacy center'
  >
}
