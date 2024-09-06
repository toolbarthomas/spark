/**
 * Esbuild Utility loader that enables static file context within the current
 * module context.
 *
 * This will assign the required file extensions to the defined Esbuild loader
 * context while compiling and should resolve any static file to the destination
 * context.
 *
 * @param extension Use the defined extension(s) as static file
 * @param type The inital loader type to use for the defined extension(s)
 */
export const staticLoader = (extension = [], type = 'copy') => {
  const queue = (Array.isArray(extension) ? extension : [extension]).filter(
    (v) => typeof v === 'string'
  )

  const loader = queue.reduce((request, key) => {
    if (request instanceof Object) {
      request[key] = type
    }

    return request
  }, {})

  return loader || {}
}
