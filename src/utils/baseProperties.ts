import { ArgTypes } from '@storybook/html'

export const baseProperties: ArgTypes = {
  accent: {
    control: { type: 'select' },
    options: ['white', 'black', 'dawn', 'dusk', 'grey', 'red', 'blue', 'green']
  },
  mode: {
    control: { type: 'select' },
    options: ['dark', 'light']
  }
}
