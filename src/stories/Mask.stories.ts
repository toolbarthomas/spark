import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Mask'

const meta = {
  title: 'Navigation / Mask',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/mask/index.js', 'spark-mask', args),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    innerHTML: `
      <slot>
      <span>
        ${Array(50)
          .fill('')
          .map((_, i) => `<strong><a href="#i">Menu${i}</a></strong>`)}
      </span>
      </slot>
    `
  }
}
