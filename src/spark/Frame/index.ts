import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'

export class Frame extends Enlightenment {
  static styles = [style]

  protected render() {
    return html`
      <section class="frame">
        <div class="frame__wrapper">
          <header class="frame__header">
            <slot name="header"></slot>
          </header>
          <div class="frame__slots">
            <div class="frame__summary">
              <slot name="summary"></slot>
            </div>
            <aside class="frame__aside">
              <slot name="aside"></slot>
            </aside>
          </div>
          <main class="frame__main"></main>
        </div>
      </section>
    `
  }
}

defineCustomElement('spark-frame', Frame)
