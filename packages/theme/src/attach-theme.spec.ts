import { attachTheme } from './attach-theme'

describe('Theme', () => {
  describe('attachTheme()', () => {
    let root: jest.MockedObjectDeep<Element>

    beforeEach(() => {
      root = {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
      } as any
    })

    it('Should throw when null root passed', () => {
      expect(() =>
        attachTheme({
          theme: { className: 'test' },
          root: null,
        }),
      ).toThrow()
    })

    it('Should throw when undefined root passed', () => {
      expect(() =>
        attachTheme({
          theme: { className: 'test' },
          root: undefined,
        }),
      ).toThrow()
    })

    it('Should attach class name to root', () => {
      attachTheme({
        theme: { className: 'test' },
        root,
      })

      expect(root.classList.add).toBeCalledWith('test')
    })

    it('Should remove previous class name from root and attach new one', () => {
      attachTheme({
        theme: { className: 'test' },
        root,
      })

      expect(root.classList.add).toBeCalledWith('test')

      attachTheme({
        theme: { className: 'test2' },
        root,
      })

      expect(root.classList.remove).toBeCalledWith('test')
      expect(root.classList.add).toBeCalledWith('test2')
    })

    it('Should delete class name when undefined theme passed', () => {
      attachTheme({
        theme: { className: 'test' },
        root,
      })

      root.classList.add.mockReset()
      root.classList.remove.mockReset()

      attachTheme({
        theme: undefined,
        root,
      })

      expect(root.classList.add).not.toBeCalled()
      expect(root.classList.remove).toBeCalledWith('test')
    })

    it('Should work with multiple roots', () => {
      const root2: jest.MockedObjectDeep<Element> = {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
      } as any

      attachTheme({
        theme: { className: 'root1-1' },
        root,
      })
      attachTheme({
        theme: { className: 'root2-1' },
        root: root2,
      })

      expect(root.classList.add).toBeCalledWith('root1-1')
      expect(root2.classList.add).toBeCalledWith('root2-1')
      expect(root.classList.remove).not.toBeCalled()
      expect(root2.classList.remove).not.toBeCalled()

      root.classList.add.mockReset()
      root.classList.remove.mockReset()
      root2.classList.add.mockReset()
      root2.classList.remove.mockReset()

      attachTheme({
        theme: { className: 'root1-2' },
        root,
      })

      expect(root.classList.add).toBeCalledWith('root1-2')
      expect(root2.classList.add).not.toBeCalled()
      expect(root.classList.remove).toBeCalledWith('root1-1')
      expect(root2.classList.remove).not.toBeCalled()
    })
  })
})
