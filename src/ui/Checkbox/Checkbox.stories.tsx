import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from 'pijama/ui/Checkbox/bundle'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const BrandCheckbox: ComponentStory<typeof Checkbox> = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Checkbox />
      <Checkbox checked />
      <Checkbox checked disabled />
      <Checkbox error />
    </div>
  )
}
