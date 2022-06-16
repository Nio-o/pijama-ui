import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'pijama/ui/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args}>Получить кыарту</Button>
)

export const Playground = Template.bind({})
Playground.argTypes = {
  className: { type: 'string', description: 'ClassName' },
}

export const ButtonB2C = Template.bind({})
// ButtonB2C.storyName = "Theme: b2c";

export const ButtonB2B = Template.bind({})
// ButtonB2B.storyName = "Theme: b2b";
