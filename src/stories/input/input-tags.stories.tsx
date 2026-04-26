import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/input/input-tags';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    tooltip: { control: 'text' },
    size: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'text' },
    isDisabled: { control: 'text' },
    isInvalid: { control: 'text' },
    allowDuplicates: { control: 'text' },
    maxTags: { control: 'text' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    onChange: { control: 'text' },
    onTagAdded: { control: 'text' },
    onTagRemoved: { control: 'text' },
    validate: { control: 'text' },
    className: { control: 'text' },
    hideRequiredIndicator: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label value',
    hint: 'hint value',
    tooltip: 'tooltip value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    label: 'label example',
    hint: 'hint example',
    tooltip: 'tooltip example',
    size: 'size example',
    placeholder: 'placeholder example',
    isRequired: 'isRequired example',
    isDisabled: 'isDisabled example',
    isInvalid: 'isInvalid example',
    allowDuplicates: 'allowDuplicates example',
    maxTags: 'maxTags example',
    value: 'value example',
    defaultValue: 'defaultValue example',
    onChange: 'onChange example',
    onTagAdded: 'onTagAdded example',
    onTagRemoved: 'onTagRemoved example',
    validate: 'validate example',
    className: 'className example',
    hideRequiredIndicator: 'hideRequiredIndicator example'
  },
};
