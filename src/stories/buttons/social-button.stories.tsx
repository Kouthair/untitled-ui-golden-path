import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/buttons/social-button';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'text' },
    theme: { control: 'text' },
    size: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: 'disabled value',
    theme: 'theme value',
    size: 'size value'
  },
};

// Generate additional variants for components with many props

