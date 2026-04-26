import type { Meta, StoryObj } from '@storybook/react';
import { CircleProgressBar } from '@ui/components/base/progress-indicators/simple-circle';

const meta: Meta<typeof CircleProgressBar> = {
  title: 'Base/simple-circle',
  component: CircleProgressBar,
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

