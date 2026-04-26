import type { Meta, StoryObj } from '@storybook/react';
import { TagAvatar } from '@ui/components/base/tags/tags';

const meta: Meta<typeof TagAvatar> = {
  title: 'Base/tags',
  component: TagAvatar,
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

