import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAccountBreadcrumb } from '@ui/components/base/dropdown/dropdown-account-breadcrumb';

const meta: Meta<typeof DropdownAccountBreadcrumb> = {
  title: 'Base/dropdown-account-breadcrumb',
  component: DropdownAccountBreadcrumb,
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

