import type { Meta, StoryObj } from '@storybook/react';
import { AvatarCount } from '@ui/components/base/avatar/base-components/avatar-count';

const meta: Meta<typeof AvatarCount> = {
  title: 'Base/avatar-count',
  component: AvatarCount,
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

