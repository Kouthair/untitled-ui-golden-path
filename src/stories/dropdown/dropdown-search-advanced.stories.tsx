import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSearchAdvanced } from '@ui/components/base/dropdown/dropdown-search-advanced';

const meta: Meta<typeof DropdownSearchAdvanced> = {
  title: 'Base/dropdown-search-advanced',
  component: DropdownSearchAdvanced,
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

