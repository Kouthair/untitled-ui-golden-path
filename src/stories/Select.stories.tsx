import type { Meta, StoryObj } from '@storybook/react';
import { Select } from "@/components/base/select/select";

const meta: Meta<typeof Select> = {
  title: 'Base/Select',
  component: Select,
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};