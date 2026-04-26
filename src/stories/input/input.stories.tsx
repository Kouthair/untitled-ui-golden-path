import type { Meta, StoryObj } from '@storybook/react';
import { InputBase } from '@ui/components/base/input/input';

const meta: Meta<typeof InputBase> = {
  title: 'Base/input',
  component: InputBase,
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

