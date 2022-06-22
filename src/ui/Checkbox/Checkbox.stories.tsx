import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from 'pijama/ui/Checkbox/bundle'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const BrandCheckbox: ComponentStory<typeof Checkbox> = () => {
  const textStub = 'Продать алюминий'
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
      <Checkbox text={textStub} variant="brand" />
      <Checkbox text={textStub} checked variant="brand" />
    </div>
  )
}
