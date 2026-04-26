import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/badges/badge-groups';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: { control: 'text' },
    theme: { control: 'text' },
    align: { control: 'text' },
    iconTrailing: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'children value',
    size: 'size value',
    theme: 'theme value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    children: 'children example',
    size: 'size example',
    theme: 'theme example',
    align: 'align example',
    iconTrailing: 'iconTrailing example',
    className: 'className example'
  },
};
