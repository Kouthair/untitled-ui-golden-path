import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/vendor/ui/src/components/base/buttons/button';

// CRITICAL FOR AI: This Meta object defines the exact API contract.
const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button. Default is "sm".',
    },
    color: {
      control: 'select',
      options: [
        'primary', 
        'secondary', 
        'tertiary', 
        'primary-destructive', 
        'secondary-destructive'
      ],
      description: 'Visual variant of the button. Use "primary-destructive" for delete actions.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables the button. Applies opacity-50 and cursor-not-allowed automatically.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables interaction.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Standard Primary Button
export const Primary: Story = {
  args: {
    children: 'Save Changes',
    size: 'md',
    color: 'primary',
  },
};

// Destructive Action (AI needs to see this so it doesn't use custom red classes)
export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    color: 'primary-destructive',
    iconLeading: undefined, // Usually paired with a Trash icon
  },
};

// Loading State
export const Loading: Story = {
  args: {
    children: 'Saving...',
    isLoading: true,
    color: 'primary',
  },
};