import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'pijama/ui/Button/bundle'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Playground: ComponentStory<typeof Button> = (props) => {
  return <Button {...props}>Button</Button>
}

Playground.argTypes = {
  size: {
    defaultValue: 'm',
    options: ['s', 'm', 'l'],
    control: 'select',
  },
  as: {
    defaultValue: 'button',
    options: ['button', 'div', 'span'],
    description: 'Render as HTML element',
    control: 'select',
  },
  disabled: {
    control: 'boolean',
    defaultValue: false,
  },
  variant: {
    defaultValue: 'brand',
    options: ['brand', 'simple'],
    control: 'select',
  },
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

export const SimpleButton: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Button variant="simple" size="l">
        Button
      </Button>
      <Button variant="simple" size="m">
        Button
      </Button>
      <Button variant="simple" size="s">
        Button
      </Button>
    </div>
  )
}

export const SimpleButtonDisabled: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Button variant="simple" disabled size="l">
        Button
      </Button>
      <Button variant="simple" disabled size="m">
        Button
      </Button>
      <Button variant="simple" disabled size="s">
        Button
      </Button>
    </div>
  )
}
