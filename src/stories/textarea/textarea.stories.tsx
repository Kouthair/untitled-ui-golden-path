import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaBase } from '@ui/components/base/textarea/textarea';

const meta: Meta<typeof TextAreaBase> = {
  title: 'Base/textarea',
  component: TextAreaBase,
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

