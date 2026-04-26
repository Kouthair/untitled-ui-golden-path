import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/input/input-file';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'text' },
    isInvalid: { control: 'text' },
    isRequired: { control: 'text' },
    hideRequiredIndicator: { control: 'text' },
    acceptedFileTypes: { control: 'text' },
    allowsMultiple: { control: 'text' },
    isLoading: { control: 'text' },
    onChange: { control: 'text' },
    className: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    label: 'label value',
    hint: 'hint value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    label: 'label example',
    hint: 'hint example',
    placeholder: 'placeholder example',
    isDisabled: 'isDisabled example',
    isInvalid: 'isInvalid example',
    isRequired: 'isRequired example',
    hideRequiredIndicator: 'hideRequiredIndicator example',
    acceptedFileTypes: 'acceptedFileTypes example',
    allowsMultiple: 'allowsMultiple example',
    isLoading: 'isLoading example',
    onChange: 'onChange example',
    className: 'className example',
    buttonText: 'buttonText example'
  },
};
