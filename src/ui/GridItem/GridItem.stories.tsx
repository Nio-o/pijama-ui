import React from 'react'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Grid } from 'pijama/ui/Grid/bundle'
import { GridItem } from 'pijama/ui/GridItem/bundle'

export default {
  title: 'Components/GridItem',
  component: GridItem,
} as ComponentMeta<typeof GridItem>

export const Playground: ComponentStory<typeof GridItem> = (props) => {
  return (
    <Grid>
      <GridItem {...props}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi est doloremque, ullam dolorum eum
          consequuntur ea nulla cumque quo?
        </p>
      </GridItem>
    </Grid>
  )
}

Playground.argTypes = {
  columns: {
    defaultValue: '1',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    control: { type: 'select' },
  },
}

export const GridItemColumn_2_2: ComponentStory<typeof GridItem> = () => {
  return (
    <Grid>
      <GridItem columns={'2'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi est doloremque, ullam dolorum eum
        consequuntur ea nulla cumque quo?
      </GridItem>
      <GridItem columns={'2'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi est doloremque, ullam dolorum eum
        consequuntur ea nulla cumque quo?
      </GridItem>
    </Grid>
  )
}
