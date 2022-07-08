# @pijama/theme

## attachTheme

Подключает тему добавлением className к DOM элементу. При SSR className не добавляется. На один DOM элемент может быть подключена только одна тема.

### Подключение внутри компонента

```tsx
import { attachTheme, themeVariantDefault } from '@pijama/theme'

export const App = () => {
  const root = useRef()

  const theme = themeVariantDefault

  useEffect(() => {
    // При смене темы, предыдущая удалится автоматически
    attachTheme({ theme, root: root.current })
  }, [theme])

  return <div ref={root}>Example</div>
}
```

### Подключение вне компонента

```tsx
import { attachTheme, themeVariantDefault } from 'pijama'

export const App = () => {
  return <div>Example</div>
}

const root = document.querySelector('#root')
attachTheme({ theme: themeVariantDefault }, root)
ReactDom.render(<App />, root)
```

### Переопределение темы

TODO: описать процесс темизации
