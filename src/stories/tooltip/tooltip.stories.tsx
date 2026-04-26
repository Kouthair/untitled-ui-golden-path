import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@ui/components/base/tooltip/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Base/tooltip',
  component: Tooltip,
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

