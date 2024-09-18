export const render = <T>(path: string, tag: string, args?: T, deps?: string[]) => {
  try {
    path && import(/* @vite-ignore */ `${path}?v=${Date.now()}`)

    if (deps && deps.length) {
      deps.forEach((dep) => dep && import(/* @vite-ignore */ `${dep}?v=${Date.now()}`))
    }
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
