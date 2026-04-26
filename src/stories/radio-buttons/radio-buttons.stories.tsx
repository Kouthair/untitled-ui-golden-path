import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtonBase } from '@ui/components/base/radio-buttons/radio-buttons';

const meta: Meta<typeof RadioButtonBase> = {
  title: 'Base/radio-buttons',
  component: RadioButtonBase,
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

