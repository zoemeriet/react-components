import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components / Card',
  args: {
    children: 'Content',
    title: 'Title',
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {};