import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButtonLink } from '@ui/components/base/dropdown/dropdown-button-link';

const meta: Meta<typeof DropdownButtonLink> = {
  title: 'Base/dropdown-button-link',
  component: DropdownButtonLink,
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

