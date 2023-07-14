import { ButtonProps, Button } from './Button.tsx'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click here',
  },
  argTypes: {
    asChild: { table: { disable: true } },
  },
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {}
