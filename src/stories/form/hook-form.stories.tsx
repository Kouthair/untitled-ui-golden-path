import type { Meta, StoryObj } from '@storybook/react';
import { useFormFieldContext } from '@ui/components/base/form/hook-form';

const meta: Meta<typeof useFormFieldContext> = {
  title: 'Base/hook-form',
  component: useFormFieldContext,
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

