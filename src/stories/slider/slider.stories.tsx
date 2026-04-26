import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@ui/components/base/slider/slider';

const meta: Meta<typeof Slider> = {
  title: 'Base/slider',
  component: Slider,
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

