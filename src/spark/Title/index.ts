import {
  createRef,
  defineCustomElement,
  Enlightenment,
  EnlightenmentTheme,
  html,
  nothing,
  property,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'

export class Title extends Enlightenment {
  static styles = [style]

  static types = ['default', 'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  @property({
    type: String,
    converter: (value) => Enlightenment.filterPropertyValue(value, EnlightenmentTheme.DIRECTIONS)
  })
  align?: string

  @property({
    type: String
  })
  name?: string

  @property({
    type: String,
    converter: (value) => Enlightenment.filterProperty(value, Title.types)
  })
  type?: string

  protected render() {
    if (!this.name) {
      return nothing
    }

    switch (this.type) {
      case 'display':
        return this.name ? html`<h1 class="title">${this.name}</h1>` : nothing

      default:
        return this.name ? html`<span class="title">${this.name}</span>` : nothing
    }
  }
}

defineCustomElement('spark-title', Title)
