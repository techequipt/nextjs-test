import type { Meta, StoryObj } from '@storybook/react';
import { Pipeline } from './Pipeline';

const pipeline: Meta<typeof Pipeline> = {
  title: 'Example/Pipeline',
  component: Pipeline,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default pipeline;
type Story = StoryObj<typeof Pipeline>;

export const PipeLine: Story = {
    args: {
        name: 'Pipeline',
        rate: 50,
        status: 'Building',
        timeRemaine: '1 hour'
      },
   
};
