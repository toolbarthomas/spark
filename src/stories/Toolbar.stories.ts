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
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    innerHTML: `<a href="#">Toolbar with simple link</a>`
  }
}
