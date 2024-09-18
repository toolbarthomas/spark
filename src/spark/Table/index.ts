import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'
import { PropertyValueMap } from 'lit'

export class Table extends Enlightenment {
  static styles = [style]

  enableFragments?: boolean | undefined = true

  protected firstUpdated(properties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(properties)

    this.assignFragments('table')
  }

  protected render() {
    return html`
      <div class="table" fragment="table"></div>
      <slot name="table"></slot>
    `
  }
}

defineCustomElement('spark-table', Table)
