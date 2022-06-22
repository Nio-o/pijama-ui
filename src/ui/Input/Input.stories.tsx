import React, { useState } from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from 'pijama/ui/Input/bundle'

export default {
  title: 'Components/Input',
} as ComponentMeta<typeof Input>

export const Playground: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: '32px' }}>
      <Input
        hint="Hint"
        title="Field Name"
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        title="Field Name"
        hint="Hint"
        placeholder="Placeholder"
        value={value}
        state="error"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
