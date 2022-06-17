/* eslint-disable @typescript-eslint/no-var-requires */
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const esbuild = require('esbuild')
const glob = require('fast-glob')
const cssModulesPlugin = require('./esbuild-css-modules')

const target = 'es6'
const format = 'esm'
const outDir = './'

const getEntryPoints = () =>
  [...glob.sync('./src/**/*.ts(x)?'), ...glob.sync('./src/**/*.module.css')].sort()

const watch = process.argv.includes('--watch')

const build = async (entryPoints) => {
  return esbuild.build({
    format,
    entryPoints,
    logLevel: 'debug',
    outdir: outDir,
    outbase: './src',
    bundle: false,
    minify: false,
    platform: 'node',
    sourcemap: false,
    target,
    watch,
    plugins: [nodeExternalsPlugin(), cssModulesPlugin()],
    tsconfig: './tsconfig.build.json',
  })
}

const startBuild = async () => {
  const entryPoints = getEntryPoints()

  const result = await build(entryPoints)

  if (!watch) return

  const intervalId = setInterval(() => {
    const newEntryPoints = getEntryPoints()

    let isEntryPointsChanged = false
    if (newEntryPoints.length !== entryPoints.length) {
      isEntryPointsChanged = true
    } else {
      for (const [i, newEntryPoint] of newEntryPoints.entries()) {
        if (newEntryPoint !== entryPoints[i]) {
          isEntryPointsChanged = true
          break
        }
      }
    }

    if (!isEntryPointsChanged) return

    console.log('Entry change detected')
    console.log('Rebuild')
    clearInterval(intervalId)
    result.stop()
    startBuild()
  }, 1000)
}

startBuild()
