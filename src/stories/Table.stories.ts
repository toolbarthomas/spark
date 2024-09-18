import type { StoryObj, Meta } from '@storybook/html'
import { fn } from '@storybook/test'

import { render } from '../utils/render'
import { baseProperties } from '../utils/baseProperties'

import { Props } from '../spark/Table'

const meta = {
  title: 'Core / Table',
  tags: ['autodocs'],
  render: (args: Props) => render('/dist/Table/index.js', 'spark-table', args),
  argTypes: {
    accent: baseProperties.accent,
    mode: baseProperties.mode
  }
}

export default meta

export const Default = {
  args: {
    innerHTML: `
      <table slot="table">
        <thead>
          <tr>
            <th>Table heading 1</th>
            <th>Table heading 2</th>
            <th>Table heading 3</th>
            <th width="1"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Column A1</td>
            <td>Table Column A2</td>
            <td>Table Column A3</td>
            <td>Clear</td>
          </tr>
          <tr>
            <td>Table Column B1</td>
            <td>Table Column B2</td>
            <td>Table Column B3</td>
            <td>Clear</td>
          </tr>
          <tr>
            <td>Table Column C1</td>
            <td>Table Column C2</td>
            <td>Table Column C3</td>
            <td>Clear</td>
          </tr>
        </tbody>
      </table>
    `
  }
}
