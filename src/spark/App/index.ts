import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'

export class App extends Enlightenment {
  static styles = [style]

  protected firstUpdated(properties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(properties)
  }

  protected render() {
    return html` <div class="app"><slot></slot></div> `
  }
}

defineCustomElement('spark-app', App)
