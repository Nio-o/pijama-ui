import React from 'react'

import { render } from '@testing-library/react'

import { Divider } from './Divider'

import '@testing-library/jest-dom'

describe('Components / Divider', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should have role="separator"', () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toHaveAttribute('role', 'separator')
  })

  it('Should render as "div" by default', () => {
    const container = render(<Divider testId="test" />)
    expect(container.getByTestId('test').tagName.toLowerCase()).toBe('div')
  })

  it('Should render as "span" when prop "as=span" provided', () => {
    const container = render(<Divider testId="test" as="span" />)
    expect(container.getByTestId('test').tagName.toLowerCase()).toBe('span')
  })
})
