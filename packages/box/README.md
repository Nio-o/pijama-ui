# Box

Базовый компонент, который используется для построения всех остальных.

Box нужен для того, чтобы все компоненты в библиотеки имели один базовый интерфейс, который позволит использовать пропсы для стилизации.

## Пример

Если нужно создать новый компонент, то в его основе должен быть Box.

Например, создадим `Button`

```tsx
import { forwardRef } from '@pijama/system'
import { Box, extractStyledProps } from '@pijama/box'

export const Example = forwardRef<ExampleProps, 'div'>((props, ref): JSX.Element | null => {
  const {
    rest: { as: AsComponent = 'div', className, children, ...rest },
    styled,
  } = extractStyledProps(props)
  // styled содержит все пропсы, которые относятся к BoxProps
  // rest содержит все остальное

  return (
    <Box {...styled} {...rest} as={AsComponent} ref={ref} className={cnExample(null, [className])}>
      {children}
    </Box>
  )
})
```
