import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ui/components/base/badges/badges';

const meta: Meta<typeof Badge> = {
  title: 'Base/badges',
  component: Badge,
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

