import type { ReactHTML } from 'react'
import React from 'react'

import { render } from '@testing-library/react'

import { Text } from './bundle'

import '@testing-library/jest-dom'

describe('Components / Text', () => {
  const renderAs: (keyof ReactHTML)[] = ['span', 'p', 'h1']

  renderAs.forEach((renderAs) => {
    it(`Should render component as "${renderAs}"`, () => {
      const container = render(
        <Text as={renderAs} testId="test">
          text
        </Text>,
      )

      expect(container.getByTestId('test').tagName.toLowerCase()).toEqual(renderAs)
      expect(container.getByTestId('test')).toHaveTextContent('text')
    })
  })

  const mods = [
    ['weight', 'bold'],
    ['align', 'center'],
    ['typo', 'h1'],
  ] as const
  mods.forEach(([name, value]) => {
    it(`Should not pass modifier "${name}" to DOM element`, () => {
      const prop = { [name]: value }
      const container = render(
        <Text testId="test" {...prop}>
          text
        </Text>,
      )

      expect(container.getByTestId('test')).not.toHaveAttribute(name)
    })

    it(`Should not pass modifier "${name}" to DOM element for custom component`, () => {
      const prop = { [name]: value }

      const TestComponent: React.FC = (props) => {
        return <div {...props} />
      }

      const container = render(
        <Text testId="test" as={TestComponent} {...prop}>
          text
        </Text>,
      )

      expect(container.getByTestId('test')).not.toHaveAttribute(name)
    })
  })

  it('Should render as "span" by default', () => {
    const container = render(<Text testId="test">text</Text>)
    expect(container.getByTestId('test').tagName.toLowerCase()).toEqual('span')
    expect(container.getByTestId('test')).toHaveTextContent('text')
  })

  it('Should render as "a" and allow to pass additional props', () => {
    const container = render(
      <Text as="a" href="my-link" testId="test">
        text
      </Text>,
    )
    const component = container.getByTestId('test')

    expect(component.tagName.toLowerCase()).toEqual('a')
    expect(component).toHaveAttribute('href', 'my-link')
  })

  it('Should render as "button" and allow to pass additional props', () => {
    const container = render(
      <Text as="button" disabled testId="test">
        text
      </Text>,
    )
    const component = container.getByTestId('test')

    expect(component.tagName.toLowerCase()).toEqual('button')
    expect(component).toHaveAttribute('disabled')
  })

  it('Should render as custom component and allow to pass additional props', () => {
    const TestComponent: React.FC<{ testProp: string }> = ({ testProp, children: _, ...rest }) => {
      return <div {...rest}>{testProp}</div>
    }

    const container = render(
      <Text testId="test" as={TestComponent} testProp="testProp">
        empty
      </Text>,
    )

    const element = container.getByTestId('test')

    expect(element).toHaveTextContent('testProp')
    expect(element).not.toHaveTextContent('empty')
  })
})
