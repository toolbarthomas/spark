import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Toolbar'

const meta = {
  title: 'Example/Toolbar',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/Toolbar/index.js', 'spark-toolbar', args),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    innerHTML: `<a href="#">Toolbar with simple link</a>`
  }
}
