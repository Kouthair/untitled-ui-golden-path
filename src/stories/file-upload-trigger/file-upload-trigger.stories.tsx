import type { Meta, StoryObj } from '@storybook/react';
import { FileTrigger } from '@ui/components/base/file-upload-trigger/file-upload-trigger';

const meta: Meta<typeof FileTrigger> = {
  title: 'Base/file-upload-trigger',
  component: FileTrigger,
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

