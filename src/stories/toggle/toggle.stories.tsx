import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/toggle/toggle';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    slim: { control: 'text' },
    className: { control: 'text' },
    isHovered: { control: 'text' },
    isFocusVisible: { control: 'text' },
    isSelected: { control: 'text' },
    isDisabled: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    slim: 'slim value',
    className: 'className value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    slim: 'slim example',
    className: 'className example',
    isHovered: 'isHovered example',
    isFocusVisible: 'isFocusVisible example',
    isSelected: 'isSelected example',
    isDisabled: 'isDisabled example'
  },
};
