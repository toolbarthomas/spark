import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Mask'

const meta = {
  title: 'Navigation / Mask',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/Mask/index.js', 'spark-mask', args),
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
        ${
          render('/dist/Menu/index.js', 'spark-menu') &&
          `
          <spark-menu items="[{'url': '#home', 'text': 'Home'}, {'url': '#info', 'text': 'Info'}]"></spark-menu>
          <spark-menu>
            <a href="1" aria-current="true">1</a>
            <a href="2">2</a>
            <a href="3">3</a>
          </spark-menu>
          `
        }
      </slot>
    `
  }
}
