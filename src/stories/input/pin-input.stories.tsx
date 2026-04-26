import type { Meta, StoryObj } from '@storybook/react';
import { PinInput } from '@ui/components/base/input/pin-input';

const meta: Meta<typeof PinInput> = {
  title: 'Base/pin-input',
  component: PinInput,
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

