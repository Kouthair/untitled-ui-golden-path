import type { Meta, StoryObj } from '@storybook/react';
import { GoogleLogo } from '@ui/components/base/buttons/social-logos';

const meta: Meta<typeof GoogleLogo> = {
  title: 'Base/social-logos',
  component: GoogleLogo,
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

