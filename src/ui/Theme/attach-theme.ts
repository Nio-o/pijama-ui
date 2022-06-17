export interface Theme {
  className: string
}

export interface AttachThemeOptions {
  theme?: Theme
  root?: Element | null
}

const prevClassNames = new WeakMap<Element, string>()
const isBrowser = typeof window !== 'undefined'

export const attachTheme = ({ theme, root }: AttachThemeOptions): void => {
  if (!isBrowser) {
    return
  }

  if (!root) {
    throw new Error('Cannot attach theme to null root')
  }

  const maybePrevClassName = prevClassNames.get(root)
  if (maybePrevClassName) {
    root.classList.remove(maybePrevClassName)
  }

  const newClassName = theme?.className || ''
  prevClassNames.set(root, newClassName)
  if (newClassName) {
    root.classList.add(newClassName)
  }
}
