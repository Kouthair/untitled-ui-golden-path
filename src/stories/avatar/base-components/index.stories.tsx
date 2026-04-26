import type { Meta, StoryObj } from '@storybook/react';
import { Index } from '@ui/components/base/avatar/base-components/index';

const meta: Meta<typeof Index> = {
  title: 'Base/index',
  component: Index,
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

