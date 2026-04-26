import type { Meta, StoryObj } from '@storybook/react';
import { InputTags } from '@ui/components/base/input/input-tags';

const meta: Meta<typeof InputTags> = {
  title: 'Base/input-tags',
  component: InputTags,
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

