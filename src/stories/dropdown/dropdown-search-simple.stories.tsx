import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSearchSimple } from '@ui/components/base/dropdown/dropdown-search-simple';

const meta: Meta<typeof DropdownSearchSimple> = {
  title: 'Base/dropdown-search-simple',
  component: DropdownSearchSimple,
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

