import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/buttons/button-utility';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'text' },
    size: { control: 'text' },
    color: { control: 'text' },
    icon: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: 'isDisabled value',
    size: 'size value',
    color: 'color value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    isDisabled: 'isDisabled example',
    size: 'size example',
    color: 'color example',
    icon: 'icon example',
    className: 'className example'
  },
};
