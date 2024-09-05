export const render = <T>(path: string, tag: string, args?: T) => {
  try {
    import(/* @vite-ignore */ `${path}?v=${Date.now()}`)
  } catch (error) {
    error && console.error(error)
  }

  const element = document.createElement(tag || 'div')

  const { innerHTML, ...rest } = (args || {}) as any

  if (rest && rest instanceof Object) {
    Object.entries(rest).forEach(([name, value]) => {
      if (value === null || !value.length) {
        element.removeAttribute(name)
      } else {
        element.setAttribute(name, value as any)
      }
    })
  }

  if (innerHTML) {
    element.innerHTML = innerHTML
  }

  return element
}
