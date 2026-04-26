import type { Meta, StoryObj } from '@storybook/react';
import { InputTagsOuter } from '@ui/components/base/input/input-tags-outer';

const meta: Meta<typeof InputTagsOuter> = {
  title: 'Base/input-tags-outer',
  component: InputTagsOuter,
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

