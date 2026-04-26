import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '@ui/components/base/form/form';

const meta: Meta<typeof Form> = {
  title: 'Base/form',
  component: Form,
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

