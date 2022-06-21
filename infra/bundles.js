/* eslint-disable @typescript-eslint/no-var-requires */
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const esbuild = require('esbuild')
const glob = require('fast-glob')
const cssModulesPlugin = require('./esbuild-css-modules')

const target = 'es2020'
const format = 'esm'

const bundles = glob.sync('./ui/**/bundle.js')

const startBundlesBuild = async () => {
  return esbuild.build({
    format,
    entryPoints: bundles,
    logLevel: 'info',
    write: false,
    outdir: './bundles',
    outbase: './',
    bundle: true,
    minify: true,
    platform: 'node',
    target,
    plugins: [nodeExternalsPlugin(), cssModulesPlugin()],
    tsconfig: './tsconfig.build.json',
  })
}

startBundlesBuild()
