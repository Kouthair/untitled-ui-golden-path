import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAccountCardSM } from '@ui/components/base/dropdown/dropdown-account-card-sm';

const meta: Meta<typeof DropdownAccountCardSM> = {
  title: 'Base/dropdown-account-card-sm',
  component: DropdownAccountCardSM,
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

