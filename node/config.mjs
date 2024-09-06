import { Enlightenment } from '@toolbarthomas/enlightenment'
import { parse } from '@toolbarthomas/argumentje'

import { staticLoader } from './loader.mjs'

const argv = parse()

const name = argv.name || ''
const cdn = argv.cdn || ''
const minify = argv.m || argv.minify || false
const format = argv.f || argv.format || 'esm'
const suffix = minify ? '.min' : ''
const platform = argv.platform || 'browser'
const outExtension = {
  '.js': `${suffix}${format === 'cjs' ? '.cjs' : '.js'}`
}
const outdir = argv.dist || 'dist'
const watch = argv.w || argv.watch || false

// Assigns the required Esbuild loader for the core package.
const defaultLoader = {
  ...staticLoader(Enlightenment.imageExtensions, 'copy'),
  ...staticLoader(Enlightenment.webfontExtensions, 'copy')
}

export const config = {
  cdn,
  defaultLoader,
  format,
  minify,
  name,
  outdir,
  outExtension,
  suffix,
  watch
}
