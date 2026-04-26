import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '@ui/components/base/select/multi-select';

const meta: Meta<typeof MultiSelect> = {
  title: 'Base/multi-select',
  component: MultiSelect,
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

