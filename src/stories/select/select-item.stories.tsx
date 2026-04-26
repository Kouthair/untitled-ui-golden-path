import type { Meta, StoryObj } from '@storybook/react';
import { SelectItem } from '@ui/components/base/select/select-item';

const meta: Meta<typeof SelectItem> = {
  title: 'Base/select-item',
  component: SelectItem,
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

