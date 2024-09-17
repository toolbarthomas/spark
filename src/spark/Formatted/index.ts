import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'

export class Formatted extends Enlightenment {
  static styles = [style]

  protected render() {
    return html`<section class="formatted"><slot></slot></section>`
  }
}

defineCustomElement('spark-formatted', Formatted)
