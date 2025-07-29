import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Formatted'

const meta = {
  title: 'Atoms / Button',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/Button/index.js', 'spark-button', args),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    label: 'Default button'
  }
}
