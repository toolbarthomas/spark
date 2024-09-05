import { defineCustomElement, Enlightenment, html, property } from '@toolbarthomas/enlightenment'

import style from './style.scss'

export type Props = {
  message?: string
}

class HelloWorld extends Enlightenment {
  static styles = [style]

  @property({ type: String })
  message?: Props['message']

  protected render(): unknown {
    return html`<h1>${this.message || 'Hello World'}</h1>`
  }
}
defineCustomElement('hello-world', HelloWorld)
