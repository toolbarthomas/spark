import { ArgTypes } from '@storybook/html'

export const baseProperties: ArgTypes = {
  accent: {
    control: { type: 'select' },
    options: [
      'black',
      'blue',
      'brown',
      'cyan',
      'dawn',
      'dusk',
      'green',
      'green',
      'grey',
      'grey',
      'indigo',
      'lime',
      'magenta',
      'orange',
      'pink',
      'purple',
      'red',
      'teal',
      'violet',
      'white',
      'yellow'
    ]
  },
  mode: {
    control: { type: 'select' },
    options: ['dark', 'light']
  }
}
