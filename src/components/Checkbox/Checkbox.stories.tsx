import { Checkbox, CheckboxProps } from './Checkbox.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text/Text.tsx'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()} <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    },
  ],
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Default: Story = {}
