import type { Meta, StoryObj } from '@storybook/react';
import { Pipeline } from './Pipeline';

const meta: Meta<typeof Pipeline> = {
  title: 'Example/Pipeline',
  component: Pipeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pipeline>;

export const LightMode: Story = {
  args: {
    name: 'Pipeline Name',
    theme: 'light',
    processTime: 60 * 60 * 2,
    completedTime: 60 * 60 * 1,
    description: 'We will send you an email when setup is complete.',
  },
};

export const DarkMode: Story = {
  args: {
    name: 'Pipeline Name',
    theme: 'dark',
    processTime: 60 * 60 * 2,
    completedTime: 60 * 60 * 1,
    description: 'We will send you an email when setup is complete.',
  },
};
