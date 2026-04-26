import type { Meta, StoryObj } from '@storybook/react';
import { DropdownIconSimple } from '@ui/components/base/dropdown/dropdown-icon-simple';

const meta: Meta<typeof DropdownIconSimple> = {
  title: 'Base/dropdown-icon-simple',
  component: DropdownIconSimple,
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

