# @pijama/system

Набор утилит и компонентов, которые испольуются для разработки UI библиотек.

## forwardRef

`forwardRef` работает аналогично `React.forwardRef` при этом добавляет типизированный проп `as`, в который можно передать любой элемент (`p`, `span`, `React.FC`, ...). Также корректно типизирует `ref` этого элемента. Каждый компонент должен прокидывать `ref` на корневой элемент и иметь возможность в качестве рут компонента использовать `as`. Такой подход позволяет, например, любой компонент интегрировать с роутером.

### Пример

```tsx
import { forwardRef } from '@pijama/system'

interface MyProps {
  className?: string
  justForExample?: boolean

  // Нужно явно указывать принимает ли компонент children
  children?: React.ReactNode
}

// div - компонент по умолчанию, если не передан `as`
export const MyComponent = forwardRef<MyProps, 'div'>(
  ({ as: AsComponent = 'div', className, children, justForExample, ...rest }, ref): JSX.Element | null => {
    return (
      <AsComponent {...rest} ref={ref} className={className}>
        {children}
        {justForExample && <span>Example</span>}
      </AsComponent>
    )
  },
)
```
