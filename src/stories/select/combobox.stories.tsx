import type { Meta, StoryObj } from '@storybook/react';
import { ComboBox } from '@ui/components/base/select/combobox';

const meta: Meta<typeof ComboBox> = {
  title: 'Base/combobox',
  component: ComboBox,
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

