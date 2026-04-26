import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButtonSimple } from '@ui/components/base/dropdown/dropdown-button-simple';

const meta: Meta<typeof DropdownButtonSimple> = {
  title: 'Base/dropdown-button-simple',
  component: DropdownButtonSimple,
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

