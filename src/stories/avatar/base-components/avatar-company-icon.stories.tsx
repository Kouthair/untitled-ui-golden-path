import type { Meta, StoryObj } from '@storybook/react';
import { AvatarCompanyIcon } from '@ui/components/base/avatar/base-components/avatar-company-icon';

const meta: Meta<typeof AvatarCompanyIcon> = {
  title: 'Base/avatar-company-icon',
  component: AvatarCompanyIcon,
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

