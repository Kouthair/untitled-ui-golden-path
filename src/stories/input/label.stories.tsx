import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@ui/components/base/input/label';

const meta: Meta<typeof Label> = {
  title: 'Base/label',
  component: Label,
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

