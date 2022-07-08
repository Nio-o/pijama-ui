/* eslint-disable @typescript-eslint/no-var-requires */
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const esbuild = require('esbuild')
const glob = require('fast-glob')
const cssModulesPlugin = require('./esbuild-css-modules')
const target = 'es2020'
const format = process.argv.includes('--cjs') ? 'cjs' : 'esm'
const outDir = `./dist/${format}`

const getEntryPoints = async () => {
  const entryPoints = await Promise.all([
    glob('./src/**/!(*.stories|*.spec).(js|ts)(x)?'),
    glob('./src/**/*.module.css'),
  ])
  return entryPoints.reduce((acc, list) => [...acc, ...list], []).sort()
}

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
  const entryPoints = await getEntryPoints()

  const result = await build(entryPoints)

  if (!watch) return

  let lock = false
  const intervalId = setInterval(async () => {
    if (lock) return
    lock = true

    const newEntryPoints = await getEntryPoints()
    lock = false

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
