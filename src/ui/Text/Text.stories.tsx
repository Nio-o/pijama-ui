import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text } from 'pijama/ui/Text/bundle'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Playground: ComponentStory<typeof Text> = (props) => {
  return (
    <Text as="p" {...props}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, neque.
    </Text>
  )
}
Playground.argTypes = {
  weight: {
    defaultValue: 'normal',
    options: ['light', 'normal', 'medium', 'bold', 'heavy'],
    control: { type: 'select' },
  },
  typo: {
    defaultValue: 'h1',
    options: ['h1', 'h2', 'h3', 'h4', 's', 'm', 'l', 's-compact', 'm-compact', 'l-compact'],
    control: { type: 'select' },
  },
  align: {
    defaultValue: 'start',
    options: ['start', 'end', 'justify', 'center'],
    control: { type: 'select' },
  },
}
