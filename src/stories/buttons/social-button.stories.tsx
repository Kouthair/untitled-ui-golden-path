import type { Meta, StoryObj } from '@storybook/react';
import { styles } from '@ui/components/base/buttons/social-button';

const meta: Meta<typeof styles> = {
  title: 'Base/social-button',
  component: styles,
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

