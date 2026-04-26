import type { Meta, StoryObj } from '@storybook/react';
import { styles } from '@ui/components/base/button-group/button-group';

const meta: Meta<typeof styles> = {
  title: 'Base/button-group',
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

