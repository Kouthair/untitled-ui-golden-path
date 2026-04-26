import type { Meta, StoryObj } from '@storybook/react';
import { select } from '@ui/components/base/select/select';

const meta: Meta<typeof select> = {
  title: 'Base/select',
  component: select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    ref: { control: 'text' },
    icon: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder value',
    ref: 'ref value',
    icon: 'icon value'
  },
};

// Generate additional variants for components with many props

