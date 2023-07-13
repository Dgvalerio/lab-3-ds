import { Text, TextProps } from './Text.tsx'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    size: { options: ['sm', 'md', 'lg'], control: 'inline-radio' },
    children: { table: { disable: true } },
  },
} as Meta<TextProps>

type Story = StoryObj<TextProps>

export const Large: Story = { args: { size: 'lg' } }

export const Default: Story = {}

export const Small: Story = { args: { size: 'sm' } }

export const CustomComponent: Story = {
  args: { asChild: true, children: <p>Testando</p> },
}
