import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'React-Test/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const InProgress: Story = {
  args: {
    progressPercent: 67.78,
  },
}

export const Completed: Story = {
  args: {
    progressPercent: 100,
  },
}
