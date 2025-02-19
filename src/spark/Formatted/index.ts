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

  enableFragments?: boolean | undefined = true

  protected firstUpdated(properties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(properties)

    this.assignFragments('main')
  }

  protected render() {
    return html`
      <div class="formatted" fragment="main"></div>
      <slot name="main"></slot>
    `
  }
}

defineCustomElement('spark-formatted', Formatted)
