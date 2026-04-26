import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/progress-indicators/progress-circles';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'text' },
    max: { control: 'text' },
    label: { control: 'text' },
    valueFormatter: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 'min value',
    max: 'max value',
    label: 'label value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    min: 'min example',
    max: 'max example',
    label: 'label example',
    valueFormatter: 'valueFormatter example'
  },
};
