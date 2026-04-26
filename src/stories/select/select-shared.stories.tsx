import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/select/select-shared';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hint: { control: 'text' },
    label: { control: 'text' },
    tooltip: { control: 'text' },
    size: { control: 'text' },
    placeholder: { control: 'text' },
    hideRequiredIndicator: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hint: 'hint value',
    label: 'label value',
    tooltip: 'tooltip value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    hint: 'hint example',
    label: 'label example',
    tooltip: 'tooltip example',
    size: 'size example',
    placeholder: 'placeholder example',
    hideRequiredIndicator: 'hideRequiredIndicator example'
  },
};
