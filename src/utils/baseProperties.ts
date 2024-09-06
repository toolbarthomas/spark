import { ArgTypes } from '@storybook/html'

export const baseProperties: ArgTypes = {
  accent: {
    control: { type: 'select' },
    options: ['dawn', 'dusk', 'grey', 'red', 'blue', 'green']
  },
  mode: {
    control: { type: 'select' },
    options: ['dark', 'light']
  }
}
