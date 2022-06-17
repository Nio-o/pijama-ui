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
