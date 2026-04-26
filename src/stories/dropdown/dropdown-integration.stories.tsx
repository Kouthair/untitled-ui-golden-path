import type { Meta, StoryObj } from '@storybook/react';
import { DropdownIntegration } from '@ui/components/base/dropdown/dropdown-integration';

const meta: Meta<typeof DropdownIntegration> = {
  title: 'Base/dropdown-integration',
  component: DropdownIntegration,
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

