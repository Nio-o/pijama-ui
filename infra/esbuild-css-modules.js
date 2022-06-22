/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile, mkdir } = require('node:fs/promises')
const postcss = require('postcss')
const path = require('node:path')
const cssModules = require('postcss-modules')
const crypto = require('node:crypto')
const postcssNested = require('postcss-nested')
const postcssMixins = require('postcss-mixins')

const CSS_MODULE_REGEXP = /\.module\.css$/i
const CSS_MODULE_JS_REGEXP = /\.module\.css\.js$/i
const PLUGIN_NAME = 'pijama-css-modules'
const PLUGIN_NAMESPACE = PLUGIN_NAME

const CWD = process.cwd()
const MIXINS_PATTERN = path.resolve(__dirname, '../src/**/*.mixins.css')

const onCssModuleLoad = (_build, _options) => async (args) => {
  const relativeCssPath = './' + path.basename(args.pluginData.cssOutPath)
  return {
    contents: [`import "${relativeCssPath}"`, `export default ${JSON.stringify(args.pluginData.tokens)};`].join('\n'),
  }
}

const onCssModuleResolve = (build, options) => async (args) => {
  const sourceFullPath = path.resolve(args.resolveDir, args.path)
  const source = await readFile(sourceFullPath)
  let tokens = {}
  const processor = postcss([
    postcssNested(),
    postcssMixins({ mixinsFiles: MIXINS_PATTERN }),
    cssModules({
      ...options.cssModules,
      generateScopedName: function (name, _filename, _css) {
        // e.g. ./src/ui/Button for ./src/ui/Button/**/*
        const pathPathForHash = args.path.split(path.sep).slice(0, 4).join(path.sep)
        const hash = crypto.createHash('md5').update(pathPathForHash).digest('base64url')

        return ['pijama', hash, name].join('--')
      },
      getJSON(_, json) {
        tokens = { ...json }
        return tokens
      },
    }),
  ])

  const postCssResult = await processor.process(source, {
    from: sourceFullPath,
    map: false,
  })

  const cssOutPath = path.join(
    CWD,
    build.initialOptions.outdir,
    args.path.replace(build.initialOptions.outbase, './').replace(/\.module\.css$/, '.css'),
  )

  await mkdir(path.dirname(cssOutPath), { recursive: true })
  await writeFile(cssOutPath, postCssResult.css)

  return {
    namespace: PLUGIN_NAMESPACE,
    path: cssOutPath.replace(/\.css$/, '.module.css.js'),
    watchFiles: [sourceFullPath],
    pluginData: {
      sourceFullPath,
      cssOutPath,
      tokens,
    },
  }
}

const setup = async (build, options) => {
  build.onResolve({ filter: CSS_MODULE_REGEXP, namespace: 'file' }, onCssModuleResolve(build, options))

  build.onLoad({ filter: CSS_MODULE_JS_REGEXP, namespace: PLUGIN_NAMESPACE }, onCssModuleLoad(build))
}

const scssModulesPlugin = (options = {}) => {
  options.cssModules = options.cssModules || {}

  return {
    name: PLUGIN_NAME,
    setup: async (build) => {
      await setup(build, options)
    },
  }
}

module.exports = scssModulesPlugin
