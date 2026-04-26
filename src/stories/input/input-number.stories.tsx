import type { Meta, StoryObj } from '@storybook/react';
import { InputNumberBase } from '@ui/components/base/input/input-number';

const meta: Meta<typeof InputNumberBase> = {
  title: 'Base/input-number',
  component: InputNumberBase,
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

