import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const ButtonTemplate = Template.bind({})
ButtonTemplate.args = { title: 'Button' }
