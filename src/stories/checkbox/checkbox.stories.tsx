import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/checkbox/checkbox';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    className: { control: 'text' },
    isFocusVisible: { control: 'text' },
    isSelected: { control: 'text' },
    isDisabled: { control: 'text' },
    isIndeterminate: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    className: 'className value',
    isFocusVisible: 'isFocusVisible value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    className: 'className example',
    isFocusVisible: 'isFocusVisible example',
    isSelected: 'isSelected example',
    isDisabled: 'isDisabled example',
    isIndeterminate: 'isIndeterminate example'
  },
};
