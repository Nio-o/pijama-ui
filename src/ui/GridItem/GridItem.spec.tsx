import React from 'react'

import { render } from '@testing-library/react'

import { GridItem } from './GridItem'

describe('Components / GridItem', () => {
  it('Should render as "div" by default', () => {
    const container = render(
      <GridItem columns={'2'} testId="test">
        данные
      </GridItem>,
    )
    expect(container.getByTestId('test').tagName.toLowerCase()).toBe('div')
  })
})
