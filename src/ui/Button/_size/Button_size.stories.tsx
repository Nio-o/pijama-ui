import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'pijama/ui/Button/bundle'

export default {
  title: 'Components/Button/_size',
  component: Button,
} as ComponentMeta<typeof Button>

export const All: ComponentStory<typeof Button> = () => {
  return (
    <div
      style={{
        display: 'flex',
        columnGap: '8px',
        alignItems: 'flex-start',
      }}
    >
      <Button size="l">Button</Button>
      <Button size="m">Button</Button>
      <Button size="s">Button</Button>
    </div>
  )
}
