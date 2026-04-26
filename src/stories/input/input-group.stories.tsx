import type { Meta, StoryObj } from '@storybook/react';
import { InputPrefix } from '@ui/components/base/input/input-group';

const meta: Meta<typeof InputPrefix> = {
  title: 'Base/input-group',
  component: InputPrefix,
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

