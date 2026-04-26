import type { Meta, StoryObj } from '@storybook/react';
import { TagCheckbox } from '@ui/components/base/tags/base-components/tag-checkbox';

const meta: Meta<typeof TagCheckbox> = {
  title: 'Base/tag-checkbox',
  component: TagCheckbox,
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

