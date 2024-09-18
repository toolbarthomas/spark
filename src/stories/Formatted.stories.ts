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
    <div slot="main">
      <h1>Main Heading (h1)</h1>
        <p>This is a paragraph under h1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h2>Subheading (h2)</h2>
        <p>This is a paragraph under h2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <h3>Subheading (h3)</h3>
        <p>This is a paragraph under h3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <em>Do excepteur ullamco adipisicing sit cillum nostrud.</em>

        <h4>Subheading (h4)</h4>
        <p>This is a paragraph under h4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <h5>Subheading (h5)</h5>
        <p>This is a paragraph under h5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h6>Subheading (h6)</h6>
        <p>This is a <strong>paragraph under h6</strong>. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
        </ul>

        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
        </ol>

        <p>Here is a simple table:</p>

        <p>Here is a definition list:</p>
        <dl>
          <dt>Term 1</dt>
          <dd>Definition of term 1.</dd>
          <dt>Term 2</dt>
          <dd>Definition of term 2.</dd>
        </dl>

        <p>Here is a block of preformatted text:</p>

        <details>
          <summary>Click to expand this summary</summary>
          <p>This is additional content shown when the summary is expanded.</p>
        </details>
      </div>
  `
  }
}
