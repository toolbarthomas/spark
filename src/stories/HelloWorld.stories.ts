import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'

import { Props } from '../spark/HelloWorld'

const meta = {
  title: 'Example/Hello World',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/HelloWorld/index.js', 'hello-world', args),
  argTypes: {
    accent: {
      control: { type: 'select' },
      options: ['red', 'blue', 'green']
    }
  }
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
}

export default meta

export const Default = {
  args: {
    primary: true,
    message: 'Hello Storybook!'
  }
}
