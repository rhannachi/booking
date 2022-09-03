import { Meta, Story } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Button, { ButtonProps } from './Button'

type ButtonStorieProps = ButtonProps & {
  title: string
}

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    className: '',
    title: 'Button'
  }
} as Meta<ButtonStorieProps>

export const Default: Story<ButtonStorieProps> = (args) => <Button className={args.className}> {args.title} </Button>

Default.args = {
  title: 'Button Title'
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByText('Button Title')
  expect(button).not.toBeNull()
}
