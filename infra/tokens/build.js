/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionary = require('style-dictionary')

StyleDictionary.registerFormat({
  name: `es6WithImport`,
  formatter: function ({ options: { cssModulePath, className } }) {
    return [
      `import type { Theme } from '../attach-theme.js'`,
      '',
      `import s from '${cssModulePath}'`,
      '',
      `const theme: Theme = { className: s.${className} }`,
      `export default theme`,
    ].join('\n')
  },
})

const getStyleDictionaryConfig = (theme) => {
  const className = `Theme_variant_${theme}`
  return {
    source: [`./src/ui/Theme/variant/${theme}.tokens.json`, `./src/ui/**/tokens/*.tokens.json`],
    platforms: {
      web: {
        transformGroup: 'web',
        buildPath: `./src/ui/Theme/presets/`,
        prefix: 'qw',
        files: [
          {
            destination: `${theme}.module.css`,
            format: 'css/variables',
            options: {
              selector: `.${className}`,
            },
          },
          {
            destination: `${theme}.tsx`,
            format: 'es6WithImport',
            options: {
              className,
              cssModulePath: `./${theme}.module.js`,
            },
          },
        ],
      },
    },
  }
}

console.log('Build started...')

const THEMES = ['default', 'formal']
const PLATFORM = 'web'

THEMES.forEach((theme) => {
  console.log('\n==============================================')
  console.log(`\nProcessing theme: ${theme}`)
  const styleDictionary = StyleDictionary.extend(getStyleDictionaryConfig(theme))

  styleDictionary.buildPlatform(PLATFORM)

  console.log('\nEnd processing')
})

console.log('\n==============================================')
console.log('\nBuild completed!')
