import type { Meta, StoryObj } from '@storybook/react';
import { AvatarProfilePhoto } from '@ui/components/base/avatar/avatar-profile-photo';

const meta: Meta<typeof AvatarProfilePhoto> = {
  title: 'Base/avatar-profile-photo',
  component: AvatarProfilePhoto,
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

