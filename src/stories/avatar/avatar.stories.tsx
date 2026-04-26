import type { Meta, StoryObj } from '@storybook/react';
import { undefined } from '@ui/components/base/avatar/avatar';

const meta: Meta<typeof undefined> = {
  title: 'Base/undefined',
  component: undefined,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    className: { control: 'text' },
    contentClassName: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
    contrastBorder: { control: 'text' },
    rounded: { control: 'text' },
    border: { control: 'text' },
    badge: { control: 'text' },
    status: { control: 'text' },
    verified: { control: 'text' },
    count: { control: 'text' },
    initials: { control: 'text' },
    placeholderIcon: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'size value',
    className: 'className value',
    contentClassName: 'contentClassName value'
  },
};

// Generate additional variants for components with many props

export const WithAllProps: Story = {
  args: {
    size: 'size example',
    className: 'className example',
    contentClassName: 'contentClassName example',
    src: 'src example',
    alt: 'alt example',
    contrastBorder: 'contrastBorder example',
    rounded: 'rounded example',
    border: 'border example',
    badge: 'badge example',
    status: 'status example',
    verified: 'verified example',
    count: 'count example',
    initials: 'initials example',
    placeholderIcon: 'placeholderIcon example',
    className: 'className example'
  },
};
