import React from 'react'

import { MyComp } from './MyComp'
export default {
  title: 'Components/Box',
  component: MyComp,
}

const Template = (args: any) => <MyComp {...args} />

export const Playground = Template.bind({})
