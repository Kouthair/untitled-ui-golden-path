import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAccountButton } from '@ui/components/base/dropdown/dropdown-account-button';

const meta: Meta<typeof DropdownAccountButton> = {
  title: 'Base/dropdown-account-button',
  component: DropdownAccountButton,
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

