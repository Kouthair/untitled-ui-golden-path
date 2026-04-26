import type { Meta, StoryObj } from '@storybook/react';
import { TagCloseX } from '@ui/components/base/tags/base-components/tag-close-x';

const meta: Meta<typeof TagCloseX> = {
  title: 'Base/tag-close-x',
  component: TagCloseX,
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

