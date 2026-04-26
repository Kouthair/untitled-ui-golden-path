import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAvatar } from '@ui/components/base/dropdown/dropdown-avatar';

const meta: Meta<typeof DropdownAvatar> = {
  title: 'Base/dropdown-avatar',
  component: DropdownAvatar,
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

