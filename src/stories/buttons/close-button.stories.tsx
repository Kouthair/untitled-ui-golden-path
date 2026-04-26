import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '@ui/components/base/buttons/close-button';

const meta: Meta<typeof CloseButton> = {
  title: 'Base/close-button',
  component: CloseButton,
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

