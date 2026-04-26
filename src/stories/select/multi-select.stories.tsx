import type { Meta, StoryObj } from '@storybook/react';
import { multi-select } from '@ui/components/base/select/multi-select';

const meta: Meta<typeof multi-select> = {
  title: 'Base/multi-select',
  component: multi-select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    onReset: { control: 'text' },
    onSelectAll: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    onReset: 'onReset value',
    onSelectAll: 'onSelectAll value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    onReset: 'onReset example',
    onSelectAll: 'onSelectAll example',
    className: 'className example'
  },
};
