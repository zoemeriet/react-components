import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components / Button',
  args: {
    children: 'Button',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};