import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxBase } from '@ui/components/base/checkbox/checkbox';

const meta: Meta<typeof CheckboxBase> = {
  title: 'Base/checkbox',
  component: CheckboxBase,
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

