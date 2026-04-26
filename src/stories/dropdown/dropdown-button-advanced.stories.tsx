import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButtonAdvanced } from '@ui/components/base/dropdown/dropdown-button-advanced';

const meta: Meta<typeof DropdownButtonAdvanced> = {
  title: 'Base/dropdown-button-advanced',
  component: DropdownButtonAdvanced,
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

