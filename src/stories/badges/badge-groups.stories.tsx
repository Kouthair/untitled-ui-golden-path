import type { Meta, StoryObj } from '@storybook/react';
import { BadgeGroup } from '@ui/components/base/badges/badge-groups';

const meta: Meta<typeof BadgeGroup> = {
  title: 'Base/badge-groups',
  component: BadgeGroup,
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

