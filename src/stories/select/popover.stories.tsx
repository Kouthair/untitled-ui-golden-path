import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@ui/components/base/select/popover';

const meta: Meta<typeof Popover> = {
  title: 'Base/popover',
  component: Popover,
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

