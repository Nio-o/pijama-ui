import { StrictMode } from 'react'

export const withStrictMode = (Story) => {
  return (
    <StrictMode>
      <Story />
    </StrictMode>
  )
}
