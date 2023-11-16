import type { Meta, StoryObj } from '@storybook/react'
import { Pipeline } from './Pipeline'
import Image from 'next/image'
import pipelineExampleImageSrc from './assets/pipeline.svg'

const meta: Meta<typeof Pipeline> = {
  title: 'React-Test/Pipeline',
  component: Pipeline,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Pipeline>

export const InProgress: Story = {
  args: {
    name: 'Pipeline Name',
    stepDescription: 'Your pipeline is being configured',
    stepHelpTexts: [
      'The build process can take up to two hours.',
      'We will send you an email when setup is complete.',
    ],
    image: <Image alt='pipeline image' src={pipelineExampleImageSrc} />,
    status: 'building',
    etaSeconds: 3600,
    progressPercent: 50,
  },
}

export const Completed: Story = {
  args: {
    name: 'Pipeline Name',
    stepDescription: 'Your pipeline is completed',
    image: <Image alt='pipeline image' src={pipelineExampleImageSrc} />,
    status: 'done',
    progressPercent: 100,
  },
}
