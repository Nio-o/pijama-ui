import { attachTheme, themeVariantDefault } from 'pijama/ui/Theme'
import { useLayoutEffect, useRef } from 'react'

export const withDefaultTheme = (Story) => {
  const divRef = useRef()

  useLayoutEffect(() => {
    attachTheme({ theme: themeVariantDefault, root: divRef.current })
  }, [])

  return (
    <div ref={divRef}>
      <Story />
    </div>
  )
}
