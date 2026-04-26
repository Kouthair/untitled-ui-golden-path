import type { Meta, StoryObj } from '@storybook/react';
import { ToggleBase } from '@ui/components/base/toggle/toggle';

const meta: Meta<typeof ToggleBase> = {
  title: 'Base/toggle',
  component: ToggleBase,
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

