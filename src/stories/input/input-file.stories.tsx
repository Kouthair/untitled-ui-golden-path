import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from '@ui/components/base/input/input-file';

const meta: Meta<typeof InputFile> = {
  title: 'Base/input-file',
  component: InputFile,
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

