import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'pijama/ui/Button/bundle'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Playground: ComponentStory<typeof Button> = () => {
  return <Button>Button</Button>
}

export const BrandButton: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Button variant="brand" size="l">
        Button
      </Button>
      <Button variant="brand" size="m">
        Button
      </Button>
      <Button variant="brand" size="s">
        Button
      </Button>
    </div>
  )
}

export const BrandButtonDisabled: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Button variant="brand" as="div" disabled size="l">
        Button
      </Button>
      <Button variant="brand" disabled size="m">
        Button
      </Button>
      <Button variant="brand" disabled size="s">
        Button
      </Button>
    </div>
  )
}
