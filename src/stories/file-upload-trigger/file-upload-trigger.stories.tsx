import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/file-upload-trigger/file-upload-trigger';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    acceptedFileTypes: { control: 'text' },
    allowsMultiple: { control: 'text' },
    defaultCamera: { control: 'text' },
    onSelect: { control: 'text' },
    acceptDirectory: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    acceptedFileTypes: 'acceptedFileTypes value',
    allowsMultiple: 'allowsMultiple value',
    defaultCamera: 'defaultCamera value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    acceptedFileTypes: 'acceptedFileTypes example',
    allowsMultiple: 'allowsMultiple example',
    defaultCamera: 'defaultCamera example',
    onSelect: 'onSelect example',
    acceptDirectory: 'acceptDirectory example'
  },
};
