import React from 'react'

import { render } from '@testing-library/react'

import { Grid } from './bundle'

describe('Components / Grid', () => {
  it('Should render as "div" by default', () => {
    const container = render(
      <Grid testId="test">
        <p>данные</p>
      </Grid>,
    )
    expect(container.getByTestId('test').tagName.toLowerCase()).toBe('div')
  })
})
