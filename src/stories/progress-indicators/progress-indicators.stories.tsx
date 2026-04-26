import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/progress-indicators/progress-indicators';

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
    className: { control: 'text' },
    progressClassName: { control: 'text' },
    valueFormatter: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 'min value',
    max: 'max value',
    className: 'className value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    min: 'min example',
    max: 'max example',
    className: 'className example',
    progressClassName: 'progressClassName example',
    valueFormatter: 'valueFormatter example'
  },
};
