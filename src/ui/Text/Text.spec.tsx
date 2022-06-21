import type { ReactHTML, RefObject } from 'react'
import React, { forwardRef } from 'react'

import { render } from '@testing-library/react'

import { Text } from './bundle'

import '@testing-library/jest-dom'

describe('Components / Text', () => {
  const renderAs: (keyof ReactHTML)[] = ['span', 'p', 'h1']

  renderAs.forEach((renderAs) => {
    it(`Should render component as "${renderAs}"`, () => {
      const container = render(
        <Text as={renderAs} data-testid="test">
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
        <Text data-testid="test" {...prop}>
          text
        </Text>,
      )

      expect(container.getByTestId('test')).not.toHaveAttribute(name)
    })

    it(`Should not pass modifier "${name}" to props for custom component`, () => {
      const prop = { [name]: value }

      const TestComponent = (props: Record<string, unknown>) => {
        return <div {...props} />
      }

      const container = render(<Text data-testid="test" as={TestComponent} {...prop} />)

      expect(container.getByTestId('test')).not.toHaveAttribute(name)
    })
  })

  it('Should render as "span" by default', () => {
    const container = render(<Text data-testid="test">text</Text>)
    expect(container.getByTestId('test').tagName.toLowerCase()).toEqual('span')
    expect(container.getByTestId('test')).toHaveTextContent('text')
  })

  it('Should render as "a" and allow to pass additional props', () => {
    const container = render(
      <Text as="a" href="my-link" data-testid="test">
        text
      </Text>,
    )
    const component = container.getByTestId('test')

    expect(component.tagName.toLowerCase()).toEqual('a')
    expect(component).toHaveAttribute('href', 'my-link')
  })

  it('Should render as "button" and allow to pass additional props', () => {
    const container = render(
      <Text as="button" disabled data-testid="test">
        text
      </Text>,
    )
    const component = container.getByTestId('test')

    expect(component.tagName.toLowerCase()).toEqual('button')
    expect(component).toHaveAttribute('disabled')
  })

  it('Should render as custom component and allow to pass additional props', () => {
    const TestComponent = ({
      testProp,
      ...rest
    }: Record<string, unknown> & { testProp: string }): React.ReactElement => {
      return <div {...rest}>{testProp}</div>
    }

    const container = render(<Text data-testid="test" as={TestComponent} testProp="testProp" />)

    const element = container.getByTestId('test')

    expect(element).toHaveTextContent('testProp')
    expect(element).not.toHaveTextContent('empty')
  })

  it('Should attach ref to DOM node', () => {
    const ref: RefObject<HTMLElement> = { current: null }

    render(
      <Text data-testid="test" ref={ref}>
        empty
      </Text>,
    )

    expect(ref.current).toBeDefined()
  })

  it('Should forward ref when custom component specified', () => {
    const TestComponent = forwardRef<HTMLDivElement>((_, ref) => {
      return <div ref={ref} />
    })

    const ref: RefObject<HTMLDivElement> = { current: null }

    render(<Text data-testid="test" as={TestComponent} ref={ref} />)

    expect(ref.current).toBeDefined()
  })
})
