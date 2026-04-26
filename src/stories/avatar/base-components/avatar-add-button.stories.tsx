import type { Meta, StoryObj } from '@storybook/react';
import { AvatarAddButton } from '@ui/components/base/avatar/base-components/avatar-add-button';

const meta: Meta<typeof AvatarAddButton> = {
  title: 'Base/avatar-add-button',
  component: AvatarAddButton,
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

