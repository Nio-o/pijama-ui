import { useLayoutEffect, useRef } from 'react'
import isChromatic from 'chromatic/isChromatic'
import { Symbols } from '@storybook/components'

import { attachTheme, themeVariantDefault, themeVariantFormal } from 'pijama/ui/Theme'

export const withThemes = (Story, { globals, parameters }) => {
  const defaultThemeRoot = useRef()
  const formalThemeRoot = useRef()

  const theme = isChromatic() ? 'both' : globals.theme || parameters.theme

  useLayoutEffect(() => {
    defaultThemeRoot.current && attachTheme({ theme: themeVariantDefault, root: defaultThemeRoot.current })
    formalThemeRoot.current && attachTheme({ theme: themeVariantFormal, root: formalThemeRoot.current })
  }, [theme])

  if (theme == 'both') {
    return (
      <>
        <div ref={defaultThemeRoot} style={{ position: 'relative', minHeight: 'calc(50vh - 15px)' }}>
          <Story />
        </div>
        <div ref={formalThemeRoot} style={{ position: 'relative', minHeight: 'calc(50vh - 15px)' }}>
          <Story />
        </div>
      </>
    )
  }

  return (
    <div ref={theme === 'formal' ? formalThemeRoot : defaultThemeRoot}>
      <Story />
    </div>
  )
}
