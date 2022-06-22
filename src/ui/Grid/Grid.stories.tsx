import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Grid } from 'pijama/ui/Grid/bundle'

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

export const Playground: ComponentStory<typeof Grid> = () => {
  return (
    <Grid>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi est doloremque, ullam dolorum eum
        consequuntur ea nulla cumque quo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id molestias saepe obcaecati eius delectus
        enim, perspiciatis voluptatibus, rerum odit eveniet aut! Hic laboriosam nulla, accusantium itaque nemo ratione
        inventore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id molestias saepe obcaecati eius delectus
        enim, perspiciatis voluptatibus, rerum odit eveniet aut! Hic laboriosam nulla, accusantium itaque nemo ratione
        inventore.
      </p>
    </Grid>
  )
}
