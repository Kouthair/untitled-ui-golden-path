import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/avatar/base-components/avatar-online-indicator';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'className value'
  },
};

// Generate additional variants for components with many props

