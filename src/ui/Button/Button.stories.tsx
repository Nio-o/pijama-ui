import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'pijama/ui/Button/bundle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>asde{children}</Button>
)

export const Playground = Template.bind({})

export const ButtonB2C = Template.bind({})
ButtonB2C.args = {
  theme: 'b2b',
  type: 'link',
}
ButtonB2C.storyName = 'Theme: B2C'

export const ButtonB2B = Template.bind({})
ButtonB2B.storyName = 'Theme: B2B'

export const TypeLink = Template.bind({})
TypeLink.storyName = 'Type Link'
