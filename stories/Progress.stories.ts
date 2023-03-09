import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Light: Story = {
  args: {
    title: 'Pipeline Name',
    subTitle: 'Your pipeline is being configured',
    description: 'The build process can take up to two hours. <br /> We will send you an email when setup is complete.',
    progress: 50,
    timeToComplete: 250,
  },
};
Light.parameters = {
  backgrounds: { default: 'light' },
}

export const Dark: Story = {
  args: {
    title: 'Pipeline Name',
    subTitle: 'Your pipeline is being configured',
    description: 'The build process can take up to two hours. <br /> We will send you an email when setup is complete.',
    progress: 50,
    timeToComplete: 250,
    color: 'dark',
  },
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
}
