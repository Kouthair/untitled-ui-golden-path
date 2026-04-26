import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAccountCardMD } from '@ui/components/base/dropdown/dropdown-account-card-md';

const meta: Meta<typeof DropdownAccountCardMD> = {
  title: 'Base/dropdown-account-card-md',
  component: DropdownAccountCardMD,
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

