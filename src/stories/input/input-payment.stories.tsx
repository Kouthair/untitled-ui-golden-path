import type { Meta, StoryObj } from '@storybook/react';
import { formatCardNumber } from '@ui/components/base/input/input-payment';

const meta: Meta<typeof formatCardNumber> = {
  title: 'Base/input-payment',
  component: formatCardNumber,
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

