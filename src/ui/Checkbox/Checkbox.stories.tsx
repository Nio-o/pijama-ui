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
      <Checkbox text="Хотите продать Алюминий?" />
      <Checkbox text="Продать Алюминий" checked />
      <Checkbox text="Невозвожно продать Алюминий" disabled />
      <Checkbox text="Точно продать Алюминий" checked disabled />
      <Checkbox text="Вы не уйдёте пока не продадите Алюминий" error />
    </div>
  )
}
