import type { Meta, StoryObj } from '@storybook/react';
import { AvatarOnlineIndicator } from '@ui/components/base/avatar/base-components/avatar-online-indicator';

const meta: Meta<typeof AvatarOnlineIndicator> = {
  title: 'Base/avatar-online-indicator',
  component: AvatarOnlineIndicator,
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

