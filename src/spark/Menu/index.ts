import { defineCustomElement, Enlightenment, html, property } from '@toolbarthomas/enlightenment'

import style from './style.scss'

export type Item = {
  url?: string
  text?: string
  current?: boolean
}

export type Children = Item[] | HTMLAnchorElement[]

export class Menu extends Enlightenment {
  static styles = [style]

  @property({
    converter: (value: string) =>
      Enlightenment.parseJSON(value, (result: Item) => {
        const { url, text } = result || {}

        return { url, text }
      }),
    type: Object
  })
  items?: Item[]

  protected render() {
    return html`
      <nav class="menu">
        ${this.renderItems()}
        <slot hidden></slot>
      </nav>
    `
  }

  protected renderItem() {
    return html`<a href="${item.link}"><span>${item.content}<span></a>`
  }

  protected renderItems() {
    const slot = this.useSlot()

    const items: Children = this.items ? this.items : slot && [...slot.assignedElements()]

    if (!items || !items.length) {
      return
    }

    return html`
      <ul class="menu__items">
        ${items.map((item) => {
          const url = item instanceof HTMLAnchorElement ? item.href : item.url
          const text = item instanceof HTMLAnchorElement ? item.title || item.innerHTML : item.text
          const target = (item instanceof HTMLAnchorElement && item.title) || '_self'
          const current = item instanceof HTMLAnchorElement ? item.ariaCurrent : item.current

          if (!text) {
            return
          }

          return html`<li class="menu__item" aria-current="${current ? true : false}">
            <a class="menu__link" href="${url}" target="${target}" label="${text}">
              <span class="menu__link-text">${text}</span>
            </a>
          </li>`
        })}
      </ul>
    `
  }
}

defineCustomElement('spark-menu', Menu)
