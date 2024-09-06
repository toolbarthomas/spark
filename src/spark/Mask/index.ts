import {
  createRef,
  defineCustomElement,
  Enlightenment,
  html,
  ref
} from '@toolbarthomas/enlightenment'

import style from './style.scss'
import { Ref } from 'lit-html/directives/ref'

export class Mask extends Enlightenment {
  static styles = [style]

  enableDocumentEvents = true

  indicator = createRef()

  currentWidth?: number
  previousWidth?: number

  start?: boolean = false
  end?: boolean = false
  scrollable?: boolean = false

  protected accumulate() {
    const context = this.useContext() as HTMLElement
    const indicator = this.useRef(this.indicator) as HTMLElement

    if (!context || !indicator) {
      return
    }

    const ratio = context.offsetWidth / context.scrollWidth
    this.resize(indicator, { width: ratio ? context.offsetWidth * ratio : 'auto' })
    // indicator.style.width = `${ratio ?  + 'px' : 'auto'}`

    this.commit('scrollable', ratio === 1)
  }

  public connectedCallback(): void {
    super.connectedCallback()
  }

  protected handleReady(event: Event): void {
    super.handleReady()

    this.accumulate()
  }

  protected handleScroll(event: Event) {
    const target = event.target as HTMLElement

    if (!target) {
      return
    }

    const currentWidth = target.parentElement && target.parentElement.offsetWidth
    const min = 0
    const max = (target.scrollWidth || target.offsetWidth) - (currentWidth || 0)
    const ratio = target.offsetWidth / target.scrollWidth

    const start = target.scrollLeft > min ? false : true
    const end = target.scrollLeft < max ? false : true

    this.commit('start', start)
    this.commit('end', end)

    const indicator = this.useRef(this.indicator)
    if (indicator) {
      indicator.style.transform = `translateX(${target.scrollLeft * ratio}px)`
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback()
  }

  protected handleGlobalResize(event: UIEvent) {
    super.handleGlobalResize(event)

    this.throttle(this.accumulate)
  }

  protected render(): unknown {
    return html`<div class="mask" ?start=${this.start} ?end=${this.end}>
      <div class="mask__wrapper">
        <div @scroll="${this.handleScroll}" class="mask__main" ref="${ref(this.context)}">
          <slot></slot>
        </div>
        <span aria-disabled="true" aria-focusable="false" ?hidden="${this.scrollable}" class="mask__indicator" ref="${ref(this.indicator)}"><span>
      </div>
    </div> `
  }
}

defineCustomElement('spark-mask', Mask)
