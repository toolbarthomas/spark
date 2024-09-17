import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Formatted'

const meta = {
  title: 'Core / Formatted',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/Formatted/index.js', 'spark-formatted', args),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    innerHTML: `
      <h1>Elit anim adipisicing incididunt duis ex laboris aliqua cupidatat.</h1>
      <p>Fugiat sint nulla tempor ut tempor exercitation minim eu et aliqua nisi. In deserunt cupidatat pariatur nulla pariatur. Sunt sit ex dolor commodo anim deserunt ea aute dolor amet minim ea id. Est duis et ut exercitation labore. Pariatur id proident voluptate officia. Eiusmod incididunt laboris laborum ea deserunt fugiat est enim.</p>
      <h2>Elit anim adipisicing incididunt duis ex laboris aliqua cupidatat.</h2>
      <p>Exercitation eu proident ex ut dolor voluptate.</p>
      <h3>Et id reprehenderit mollit et proident nulla.</h3>
      <p>Exercitation eu proident ex ut dolor voluptate.</p>
      <h4>Et id reprehenderit mollit et proident nulla.</h4>
      <p>Exercitation eu proident ex ut dolor voluptate.</p>
      <h5>Et id reprehenderit mollit et proident nulla.</h5>
      <p>Exercitation eu proident ex ut dolor voluptate.</p>
      <h6>Et id reprehenderit mollit et proident nulla.</h6>
      <p>Exercitation eu proident ex ut dolor voluptate.</p>
    `
  }
}
