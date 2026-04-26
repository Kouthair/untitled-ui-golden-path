import type { Meta, StoryObj } from '@storybook/react';
import { NativeSelect } from '@ui/components/base/select/select-native';

const meta: Meta<typeof NativeSelect> = {
  title: 'Base/select-native',
  component: NativeSelect,
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

