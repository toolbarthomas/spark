import esbuild from 'esbuild'
import { stylePlugin } from '@toolbarthomas/enlightenment/stylePlugin'
import { resolvePlugin } from '@toolbarthomas/enlightenment/resolvePlugin'
import { parse } from '@toolbarthomas/argumentje'
import { glob } from 'glob'

import { config } from './config.mjs'

const plugins = [stylePlugin()]

const options = {
  bundle: true,
  entryPoints: ['src/assets/main.ts'],
  format: config.format,
  keepNames: true,
  loader: { ...config.defaultLoader },
  minify: config.m || config.minify || false,
  outdir: config.outdir,
  outExtension: config.outExtension,
  platform: config.platform,
  // We don't need the Enlightenment resolvePlugin since we only want to
  // include global assets within this builder context.
  plugins
}

if (config.watch) {
  esbuild.context(options).then((context) => {
    context.watch()
  })
} else {
  esbuild.build(options).then(() => console.log(`Assets resolved: ${options.outdir}`))
}
