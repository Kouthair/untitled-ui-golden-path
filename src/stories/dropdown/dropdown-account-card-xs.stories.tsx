import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAccountCardXS } from '@ui/components/base/dropdown/dropdown-account-card-xs';

const meta: Meta<typeof DropdownAccountCardXS> = {
  title: 'Base/dropdown-account-card-xs',
  component: DropdownAccountCardXS,
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

