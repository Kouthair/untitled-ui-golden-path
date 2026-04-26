import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@ui/components/base/avatar/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Base/avatar',
  component: Avatar,
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

