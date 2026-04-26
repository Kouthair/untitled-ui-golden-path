import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/buttons/button';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'text' },
    isLoading: { control: 'text' },
    size: { control: 'text' },
    color: { control: 'text' },
    iconLeading: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: 'isDisabled value',
    isLoading: 'isLoading value',
    size: 'size value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    isDisabled: 'isDisabled example',
    isLoading: 'isLoading example',
    size: 'size example',
    color: 'color example',
    iconLeading: 'iconLeading example',
    className: 'className example'
  },
};
