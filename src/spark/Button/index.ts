import { defineCustomElement, Enlightenment, html, property } from '@toolbarthomas/enlightenment'

import style from './style.scss'

export type Props = {
  label?: string
}

class Button extends Enlightenment {
  static styles = [style]

  @property({ type: String })
  label?: Props['message']

  protected render(): unknown {
    return html`<button class="button">${this.label}</button>`
  }
}
defineCustomElement('spark-button', Button)
