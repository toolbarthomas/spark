import esbuild from 'esbuild'
import { stylePlugin } from '@toolbarthomas/enlightenment/stylePlugin'
import { resolvePlugin } from '@toolbarthomas/enlightenment/resolvePlugin'
import { parse } from '@toolbarthomas/argumentje'
import { glob } from 'glob'

import { config } from './config.mjs'

const entryPoints = [...glob.sync('./src/spark/*/**.ts')]
const plugins = [
  stylePlugin(),
  resolvePlugin({
    destination: config.cdn
      ? config.cdn
      : `${config.name || 'Enlightenment'}${config.outExtension['.js']}`,
    excludeFramework: true,
    extension: config.outExtension['.js']
  }),
  stylePlugin()
]

const options = {
  bundle: true,
  entryPoints,
  format: config.format,
  keepNames: true,
  metafile: false,
  minify: config.minify,
  outdir: config.outdir,
  outExtension: config.outExtension,
  platform: 'browser',
  plugins
}

if (config.watch) {
  esbuild.context(options).then((context) => {
    context.watch()
  })
} else {
  esbuild.build(options).then(() => console.log(`Library created: ${options.outdir}`))
}
