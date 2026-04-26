import type { Meta, StoryObj } from '@storybook/react';
import { GooglePlayButton } from '@ui/components/base/buttons/app-store-buttons-outline';

const meta: Meta<typeof GooglePlayButton> = {
  title: 'Base/app-store-buttons-outline',
  component: GooglePlayButton,
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

