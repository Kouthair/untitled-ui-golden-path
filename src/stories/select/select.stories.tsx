import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui/components/base/select/select';

const meta: Meta<typeof Select> = {
  title: 'Base/select',
  component: Select,
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

