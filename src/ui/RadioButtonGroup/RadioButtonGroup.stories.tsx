import React, { useState } from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { RadioButton, RadioGroup } from 'pijama/ui/RadioButtonGroup/bundle'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

export const Playground: ComponentStory<typeof RadioGroup> = () => {
  const [value, setValue] = useState('')
  return (
    <RadioGroup name={'texts'} value={value} onChange={setValue}>
      <RadioButton value={'text1'}>
        <span>Шикарнейший текст</span>
      </RadioButton>
      <RadioButton value={'text2'}>Просто огонь</RadioButton>
      <RadioButton value={'text3'} disabled>
        Очень красивый текст
      </RadioButton>
    </RadioGroup>
  )
}
