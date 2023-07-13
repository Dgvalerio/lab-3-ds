import { Heading, HeadingProps } from './Heading.tsx'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    size: { options: ['sm', 'md', 'lg'], control: 'inline-radio' },
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
} as Meta<HeadingProps>

type Story = StoryObj<HeadingProps>

export const Large: Story = { args: { size: 'lg' } }

export const Default: Story = {}

export const Small: Story = { args: { size: 'sm' } }

export const CustomComponent: Story = {
  args: { asChild: true, children: <h1>Heading with H1</h1> },
}
