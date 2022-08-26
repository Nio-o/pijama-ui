/* eslint-disable sonarjs/no-duplicate-string */
import { dimensionValue, flexValue, hiddenValue, passthroughStyle } from './styleProps'

describe('styleProps', () => {
  describe('flexValue', () => {
    it.each`
      should                                | when                 | value      | expected
      ${'return undefined'}                 | ${'false'}           | ${false}   | ${undefined}
      ${"return '1'"}                       | ${'true'}            | ${true}    | ${'1'}
      ${'return empty string'}              | ${'empty string'}    | ${''}      | ${''}
      ${'return this string'}               | ${'string'}          | ${'1 1 1'} | ${'1 1 1'}
      ${'return positive number as string'} | ${'positive number'} | ${2}       | ${'2'}
      ${'return negative number as string'} | ${'negative number'} | ${-2}      | ${'-2'}
      ${'return zero as string'}            | ${'zero'}            | ${0}       | ${'0'}
    `('Should $should when $when passed', ({ value, expected }) => {
      expect(flexValue(value)).toBe(expected)
    })
  })

  describe('hiddenValue', () => {
    it.each`
      should                | when                  | value        | expected
      ${'return undefined'} | ${'false'}            | ${false}     | ${undefined}
      ${'return undefined'} | ${0}                  | ${0}         | ${undefined}
      ${'return undefined'} | ${null}               | ${null}      | ${undefined}
      ${'return undefined'} | ${undefined}          | ${undefined} | ${undefined}
      ${'return undefined'} | ${'empty string'}     | ${''}        | ${undefined}
      ${"return 'none'"}    | ${'positive number'}  | ${1}         | ${'none'}
      ${"return 'none'"}    | ${'negative nyumber'} | ${-1}        | ${'none'}
      ${"return 'none'"}    | ${'non empty string'} | ${'smth'}    | ${'none'}
      ${"return 'none'"}    | ${'true'}             | ${true}      | ${'none'}
    `('Should $should when $when passed', ({ value, expected }) => {
      expect(hiddenValue(value)).toBe(expected)
    })
  })

  describe('passthroughStyle', () => {
    it.each`
      value
      ${false}
      ${0}
      ${null}
      ${undefined}
      ${''}
      ${1}
      ${-1}
      ${'smth'}
      ${true}
    `("Should return value untouched when value '$value'", ({ value }) => {
      expect(passthroughStyle(value)).toBe(value)
    })
  })

  describe('dimensionValue', function () {
    describe('number', function () {
      it('100', function () {
        const value = dimensionValue(100)
        expect(value).toBe('100px')
      })
      it('0', function () {
        const value = dimensionValue(0)
        expect(value).toBe('0')
      })
    })

    describe('units', function () {
      it('px', function () {
        const value = dimensionValue('100px')
        expect(value).toBe('100px')
      })
      it('%', function () {
        const value = dimensionValue('100%')
        expect(value).toBe('100%')
      })
      it('vh', function () {
        const value = dimensionValue('100vh')
        expect(value).toBe('100vh')
      })
    })

    describe('variables', function () {
      it('size-100', function () {
        const value = dimensionValue('size-100')
        expect(value).toBe('var(--qw-ref-size-100)')
      })
      it('static-size-100', function () {
        const value = dimensionValue('static-size-100')
        expect(value).toBe('var(--qw-ref-static-size-100)')
      })
    })

    describe('css functions', function () {
      it('calc(100px - size-100)', function () {
        const value = dimensionValue('calc(100px - size-100)')
        expect(value).toBe('calc(100px - var(--qw-ref-size-100))')
      })
      it('min(100px, size-100)', function () {
        const value = dimensionValue('min(100px, size-100)')
        expect(value).toBe('min(100px, var(--qw-ref-size-100))')
      })
      it('var(--custom-variable, calc(100% - size-100))', function () {
        const value = dimensionValue('var(--custom-variable, calc(100% - size-100))')
        expect(value).toBe('var(--custom-variable, calc(100% - var(--qw-ref-size-100)))')
      })
    })
  })
})
