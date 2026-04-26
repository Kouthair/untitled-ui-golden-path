import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@ui/components/base/dropdown/dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Base/dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};

// Generate additional variants for components with many props

