const { nodeExternalsPlugin } = require("esbuild-node-externals");
const esbuild = require("esbuild");
const glob = require("fast-glob");
const cssModulesPlugin = require("./esbuild-css-modules");

const target = "es6";
const format = "esm";
const outDir = "./components";

const entryPoints = [
  ...glob.sync("./src/**/*.ts(x)?"),
  ...glob.sync("./src/**/*.module.css"),
];

const build = async () => {
  await esbuild.build({
    format,
    entryPoints,
    logLevel: "debug",
    outdir: outDir,
    outbase: "./src",
    bundle: false,
    minify: false,
    platform: "node",
    sourcemap: false,
    target,
    watch: process.argv.includes("--watch"),
    plugins: [nodeExternalsPlugin(), cssModulesPlugin()],
    tsconfig: "./tsconfig.build.json",
  });
};

build();
