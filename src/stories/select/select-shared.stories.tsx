import type { Meta, StoryObj } from '@storybook/react';
import { sizes } from '@ui/components/base/select/select-shared';

const meta: Meta<typeof sizes> = {
  title: 'Base/select-shared',
  component: sizes,
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

