type StyleName = string | string[]
type StyleHandler = (value: any) => string | undefined

export type DimensionValue = string | number

type ResponsiveProp<T> = {
  base?: T
  S?: T
  M?: T
  L?: T
  [custom: string]: T | undefined
}

type Responsive<T> = T | ResponsiveProp<T>

export interface StyleHandlers {
  [key: string]: [StyleName, StyleHandler]
}

export const passthroughStyle = (value: any) => {
  return value
}

const UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|vmin|vmax|fr)$/
const FUNC_RE = /^\s*\w+\(/
const PIJAMA_DIMENSION_VARIABLE_RE = /size-\d+/g

export const dimensionValue = (value: DimensionValue) => {
  if (typeof value === 'number') {
    if (value === 0) {
      return '0'
    }
    return value + 'px'
  }

  if (UNIT_RE.test(value)) {
    return value
  }

  if (FUNC_RE.test(value)) {
    return value.replace(PIJAMA_DIMENSION_VARIABLE_RE, 'var(--qw-ref-$&)')
  }

  return `var(--qw-ref-${value})`
}

export const hiddenValue = (value: any) => {
  return value ? 'none' : undefined
}

export const flexValue = (value: boolean | number | string) => {
  if (typeof value === 'boolean') {
    return value ? '1' : undefined
  }

  return String(value)
}

export const baseStyleProps: StyleHandlers = {
  /** Spacing */
  margin: ['margin', dimensionValue],
  marinLeft: ['marginLeft', dimensionValue],
  marinRight: ['marginRight', dimensionValue],
  marginTop: ['marginTop', dimensionValue],
  marginBottom: ['marginBottom', dimensionValue],
  marginX: [['marginLeft', 'marginRight'], dimensionValue],
  marginY: [['marginTop', 'marginBottom'], dimensionValue],

  /** Sizing */
  width: ['width', dimensionValue],
  height: ['height', dimensionValue],
  minWidth: ['minWidth', dimensionValue],
  minHeight: ['minHeight', dimensionValue],
  maxWidth: ['maxWidth', dimensionValue],
  maxHeight: ['maxHeight', dimensionValue],

  /** Positioning */
  position: ['position', passthroughStyle],
  zIndex: ['zIndex', passthroughStyle],
  top: ['top', dimensionValue],
  left: ['left', dimensionValue],
  right: ['right', dimensionValue],
  bottom: ['bottom', dimensionValue],
  isHidden: ['display', hiddenValue],

  /** Layout */
  order: ['order', passthroughStyle],
  flex: ['flex', flexValue],
  flexGrow: ['flexGrow', passthroughStyle],
  flexShrink: ['flexShrink', passthroughStyle],
  flexBasis: ['flexBasis', passthroughStyle],
  gridArea: ['gridArea', passthroughStyle],
  gridColumn: ['gridColumn', passthroughStyle],
  gridColumnEnd: ['gridColumnEnd', passthroughStyle],
  gridColumnStart: ['gridColumnStart', passthroughStyle],
  gridRow: ['gridRow', passthroughStyle],
  gridRowEnd: ['gridRowEnd', passthroughStyle],
  gridRowStart: ['gridRowStart', passthroughStyle],
  alignSelf: ['alignSelf', passthroughStyle],
  justifySelf: ['justifySelf', passthroughStyle],
}
