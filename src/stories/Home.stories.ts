import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { App } from '../spark/App'

const meta = {
  title: 'Core / Home',
  tags: ['autodocs'],
  render: (args: Props) =>
    render('/dist/App/index.js', 'spark-app', args, [
      '/dist/Frame/index.js',
      '/dist/Title/index.js'
    ]),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    innerHTML: `
      <spark-frame accent="grey" mode="dark">
        <div slot="header">Hello</div>
        <h1 slot="summary">
          <spark-title accent="yellow" name="Web Developer"></spark-title>
          <spark-title align="rtl" name="toolbarthomas" type="display"></spark-title>
        </h1>
        <p slot="aside">Exercitation et ex laborum ullamco occaecat tempor ut irure sint laboris veniam.</p>
        <div slot="main">
          asdas
        </div>
      </spark-frame>

    `
  }
}
