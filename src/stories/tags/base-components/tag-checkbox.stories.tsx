import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/tags/base-components/tag-checkbox';

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
    isFocused: { control: 'text' },
    isSelected: { control: 'text' },
    isDisabled: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    className: 'className value',
    isFocused: 'isFocused value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    className: 'className example',
    isFocused: 'isFocused example',
    isSelected: 'isSelected example',
    isDisabled: 'isDisabled example'
  },
};
