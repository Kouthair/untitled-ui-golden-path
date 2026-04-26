import type { Meta, StoryObj } from '@storybook/react';
import { AvatarLabelGroup } from '@ui/components/base/avatar/avatar-label-group';

const meta: Meta<typeof AvatarLabelGroup> = {
  title: 'Base/avatar-label-group',
  component: AvatarLabelGroup,
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

