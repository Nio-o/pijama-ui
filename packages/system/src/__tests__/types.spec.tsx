/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useRef } from 'react'

import { forwardRef } from '../forwardRef'

describe('Type system', () => {
  it('forwardRef()', () => {
    type Props = { testProp: string }
    const MyComp = forwardRef<Props, 'div'>((props, ref): JSX.Element | null => {
      // Should be available
      let forTest: any = props.testProp
      // Should be available
      forTest = ref

      // Should pass attributes from 'div'
      forTest = props['aria-busy']
      // Should pass attributes from 'div'
      forTest = props.onCanPlay
      return forTest ? null : <></>
    })

    type CustomRefType = { test?: string }
    const ForwaredRef = React.forwardRef<CustomRefType>(() => null)

    const ReactRouterLink = (props: { to: string }) => {
      return <>{props.to}</>
    }

    const OurForwaredRef = forwardRef<{ testAgain: boolean }, 'div'>(() => null)

    const Wrapper = () => {
      const refAnchor = useRef<HTMLAnchorElement>(null)
      const refDefault = useRef<HTMLDivElement>(null)
      const customRef = useRef<CustomRefType>(null)

      return (
        <>
          <MyComp ref={refDefault} testProp="test" aria-autocomplete="none" />
          {/* Should allow to pass additional attributes */}
          <MyComp ref={refAnchor} as="a" testProp="test" href="" />
          {/* Example of react router link */}
          <MyComp as={ReactRouterLink} to="666" testProp="777" />
          {/* Should work when passed component wrapped with React.forwaredRef */}
          <MyComp as={ForwaredRef} ref={customRef} testProp="234" />
          {/* Should work when passed component wrapped with our forwaredRef */}
          <MyComp as={OurForwaredRef} testProp="55" testAgain />
        </>
      )
    }
  })
})
