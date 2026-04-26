import type { Meta, StoryObj } from '@storybook/react';
import { VerifiedTick } from '@ui/components/base/avatar/base-components/verified-tick';

const meta: Meta<typeof VerifiedTick> = {
  title: 'Base/verified-tick',
  component: VerifiedTick,
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

