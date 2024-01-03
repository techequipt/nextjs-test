import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        custom: {
          name: 'Design Resolution',
          styles: {
            width: '1100px',
            height: '176px',
          },
        },
      },
    },
  },
}