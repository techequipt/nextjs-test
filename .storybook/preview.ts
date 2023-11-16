import '../styles/tailwind.css'
import { DarkModeDecorator } from './decorators/DarkModeDecorator'

export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  themeMode: {
    defaultValue: 'light',
    toolbar: {
      // The label to show for this toolbar item
      title: 'Dark Mode?',
      icon: 'mirror',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { title: 'Mode: Light', value: 'light', icon: 'circlehollow' },
        { title: 'Mode: Dark', value: 'dark', icon: 'circle' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  }
}

export const decorators = [
  DarkModeDecorator,
]
