import type { Meta, StoryObj } from '@storybook/react';
import { InputDateBase } from '@ui/components/base/input/input-date';

const meta: Meta<typeof InputDateBase> = {
  title: 'Base/input-date',
  component: InputDateBase,
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

