import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Divider } from 'pijama/ui/Divider/bundle'

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

export const Playground: ComponentStory<typeof Divider> = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi est doloremque, ullam dolorum eum
        consequuntur ea nulla cumque quo?
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id molestias saepe obcaecati eius delectus
        enim, perspiciatis voluptatibus, rerum odit eveniet aut! Hic laboriosam nulla, accusantium itaque nemo ratione
        inventore.
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id molestias saepe obcaecati eius delectus
        enim, perspiciatis voluptatibus, rerum odit eveniet aut! Hic laboriosam nulla, accusantium itaque nemo ratione
        inventore.
      </p>
    </>
  )
}
