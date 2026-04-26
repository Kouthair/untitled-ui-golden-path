import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBarCircle } from '@ui/components/base/progress-indicators/progress-circles';

const meta: Meta<typeof ProgressBarCircle> = {
  title: 'Base/progress-circles',
  component: ProgressBarCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};

// Generate additional variants for components with many props

