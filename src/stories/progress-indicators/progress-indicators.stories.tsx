import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBarBase } from '@ui/components/base/progress-indicators/progress-indicators';

const meta: Meta<typeof ProgressBarBase> = {
  title: 'Base/progress-indicators',
  component: ProgressBarBase,
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

