import type { Meta, StoryObj } from '@storybook/react';

import { Pipeline } from './Pipeline';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Pipeline> = {
	title: 'Pipeline',
	component: Pipeline,
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
type Story = StoryObj<typeof Pipeline>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const lightMode: Story = {
	args: {
		themeColor: 'light',
		name: 'Pipeline Name',
		percent: 50,
		timeRemaining: 3600,
	},
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const darkMode: Story = {
	args: {
		themeColor: 'dark',
		name: 'Pipeline Name',
		percent: 50,
		timeRemaining: 3600,
	},
};
