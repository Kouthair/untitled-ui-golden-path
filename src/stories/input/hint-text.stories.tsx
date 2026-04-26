import type { Meta, StoryObj } from '@storybook/react';
import { HintText } from '@ui/components/base/input/hint-text';

const meta: Meta<typeof HintText> = {
  title: 'Base/hint-text',
  component: HintText,
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

