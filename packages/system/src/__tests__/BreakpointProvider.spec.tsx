/* eslint-disable sonarjs/no-duplicate-string */

// eslint-disable-next-line simple-import-sort/imports
import MatchMediaMock from 'jest-matchmedia-mock'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import type { Breakpoints } from '../BreakpointProvider'
import { useBreakpoint, BreakpointProvider } from '../BreakpointProvider'

const mediaQueryS = '(min-width: 360px)'
const mediaQueryM = '(min-width: 1280px)'
const mediaQueryL = '(min-width: 1440px)'
const mediaQueryXL = '(min-width: 1920px)'
const mediaQueryVeryLow = '(min-width: 1px)'

describe('BreakpointProvider', () => {
  describe('Responsive', () => {
    const TestComponent = ({ onRender }: { onRender?: () => void }) => {
      const ctx = useBreakpoint()
      onRender?.()
      return <div data-testid="test">{ctx.matchedBreakpoints.join(',')}</div>
    }

    let matchMedia: MatchMediaMock
    beforeEach(() => {
      matchMedia = new MatchMediaMock()
    })
    afterEach(() => {
      matchMedia.clear()
    })

    const customBreakpoints: Breakpoints = { S: 444, M: 555, L: 666, XL: 777 }

    it.each`
      name                                     | mediaquery              | props                                 | expected
      ${'Default'}                             | ${mediaQueryS}          | ${{}}                                 | ${'S'}
      ${'Default'}                             | ${mediaQueryM}          | ${{}}                                 | ${'M'}
      ${'Default'}                             | ${mediaQueryL}          | ${{}}                                 | ${'L'}
      ${'Default'}                             | ${mediaQueryXL}         | ${{}}                                 | ${'XL'}
      ${'Default (very low width)'}            | ${mediaQueryVeryLow}    | ${{}}                                 | ${'S'}
      ${'Custom breakpoints'}                  | ${'(min-width: 444px)'} | ${{ breakpoints: customBreakpoints }} | ${'S'}
      ${'Custom breakpoints'}                  | ${'(min-width: 555px)'} | ${{ breakpoints: customBreakpoints }} | ${'M'}
      ${'Custom breakpoints'}                  | ${'(min-width: 666px)'} | ${{ breakpoints: customBreakpoints }} | ${'L'}
      ${'Custom breakpoints'}                  | ${'(min-width: 777px)'} | ${{ breakpoints: customBreakpoints }} | ${'XL'}
      ${'Custom breakpoints (very low width)'} | ${mediaQueryVeryLow}    | ${{ breakpoints: customBreakpoints }} | ${'S'}
    `('$name $mediaquery', ({ mediaquery, props, expected }) => {
      matchMedia.useMediaQuery(mediaquery)

      const { getByTestId } = render(
        <BreakpointProvider {...props}>
          <TestComponent />
        </BreakpointProvider>,
      )

      const provider = getByTestId('test')
      expect(provider).toHaveTextContent(expected)
    })

    it('Only renders once for multiple resizes in the same range', () => {
      matchMedia.useMediaQuery('(min-width: 360px)')

      const onRender = jest.fn()
      render(
        <BreakpointProvider>
          <TestComponent onRender={onRender} />
        </BreakpointProvider>,
      )
      expect(onRender).toHaveBeenCalledTimes(1)

      matchMedia.useMediaQuery('(min-width: 1280px)')
      fireEvent(window, new Event('resize'))

      expect(onRender).toHaveBeenCalledTimes(2)

      fireEvent(window, new Event('resize'))

      // shouldn't fire again for something in the same range as before
      expect(onRender).toHaveBeenCalledTimes(2)
    })
  })
})
