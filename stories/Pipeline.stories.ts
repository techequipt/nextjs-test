import type { Meta, StoryObj } from '@storybook/react';
import { Pipeline } from './Pipeline';

const meta: Meta<typeof Pipeline> = {
  title: 'Example/Pipeline',
  component: Pipeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Pipeline>;

export const LightTheme: Story = {
  args: {
    name: 'Pipeline Name',
    theme: 'light-theme',
    totalTimeInSecond: 60 * 60 * 5,
    progressTimeInSecond: 60 * 60 * 3,
    completedMessage: '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>We will send you an email when setup is complete',
    inProgressMessage: '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>Your pipeline is configured successfully !'
  },
};

export const DarkTheme: Story = {
  args: {
    name: 'Pipeline Name',
    theme: 'dark-theme',
    totalTimeInSecond: 60 * 60 * 5,
    progressTimeInSecond: 60 * 60 * 3,
    completedMessage: '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>We will send you an email when setup is complete',
    inProgressMessage: '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>Your pipeline is configured successfully !'
  },
};