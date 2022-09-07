import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

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
