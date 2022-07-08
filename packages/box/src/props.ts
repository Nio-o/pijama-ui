export type BoxStylePropSet<T extends Record<any, any>> = {
  [k in keyof Required<T>]: unknown
}

export type BoxMargin = 's' | 'm'
export interface BoxWithMargin {
  m?: BoxMargin
  mt?: BoxMargin
  mr?: BoxMargin
  mb?: BoxMargin
  ml?: BoxMargin
}

export const boxMarginProps: BoxStylePropSet<BoxWithMargin> = {
  m: 'margin',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
}

export type BoxPadding = 's' | 'm'
export interface BoxWithPadding {
  p?: BoxPadding
  pt?: BoxPadding
  pr?: BoxPadding
  pb?: BoxPadding
  pl?: BoxPadding
}

export const boxPaddingProps: BoxStylePropSet<BoxWithPadding> = {
  p: 'padding',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
}

export type BoxStyledProps = BoxWithMargin & BoxWithPadding

export const boxStyledProps: BoxStylePropSet<BoxStyledProps> = { ...boxMarginProps, ...boxPaddingProps }

export type ExtractedBoxProps<T> = {
  rest: Omit<T, keyof BoxStyledProps>
  styled: BoxStyledProps
}

export const extractStyledProps = <T>(props: T): ExtractedBoxProps<T> => {
  const result: any = { rest: {}, styled: {} }

  for (const prop in props) {
    if (prop in boxStyledProps) {
      result.styled[prop] = props[prop]
    } else {
      result.rest[prop] = props[prop]
    }
  }

  return result
}
