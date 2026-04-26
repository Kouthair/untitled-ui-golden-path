import type { Meta, StoryObj } from '@storybook/react';
import { DropdownIconAdvanced } from '@ui/components/base/dropdown/dropdown-icon-advanced';

const meta: Meta<typeof DropdownIconAdvanced> = {
  title: 'Base/dropdown-icon-advanced',
  component: DropdownIconAdvanced,
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

