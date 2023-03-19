import type { Meta, StoryObj } from '@storybook/react';
import { CardInfo } from './CardInfo';

const meta: Meta<typeof CardInfo> = {
    title: 'CardInfo',
    component: CardInfo,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1c2332' },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CardInfo>;

export const Light: Story = {
    args: {
        title: 'Pipeline Name',
        shortDescription: 'Your pipeline is being configured',
        description: 'The build process can take up to two hours. <br/> We will send you an email when setup is complete.',
        progress: 50,
        timeComplete: 250,
    },
};
Light.parameters = {
    backgrounds: { default: 'light' },
}

export const Dark: Story = {
    args: {
        title: 'Pipeline Name',
        shortDescription: 'Your pipeline is being configured',
        description: 'The build process can take up to two hours. <br/> We will send you an email when setup is complete.',
        progress: 50,
        timeComplete: 250,
        theme: 'dark',
    },
};
Dark.parameters = {
    backgrounds: { default: 'dark' },
}