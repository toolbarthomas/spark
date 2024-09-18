import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  nothing,
  property,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'

export class Title extends Enlightenment {
  static styles = [style]

  @property({
    type: String
  })
  name?: string

  protected render() {
    return this.name ? html`<span class="title">${this.name}</span>` : nothing
  }
}

defineCustomElement('spark-title', Title)
