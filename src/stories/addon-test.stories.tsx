import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "@ui/components/base/buttons/button";

const meta: Meta<typeof Button> = {
  title: 'Test/Addon Designs Test',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ViewWithFigma: Story = {
  args: {
    children: 'Test Button with Figma Tab',
    color: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/QERVV4a2Fpa1FmsZ5LGW3S/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-Figma-%E2%80%93-PRO-VARIABLES--v8.0-?node-id=1480-0&t=ZKrvm8DoId8U8tpb-1',
    },
  },
};