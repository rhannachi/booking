import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

type ButtonStoriesProps = ButtonProps & {
  title: string
}

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    className: 'text-white bg-cyan-400',
    title: 'Button'
  }
} as Meta<ButtonStoriesProps>

export const Default: Story<ButtonStoriesProps> = (args) => <Button className={args.className}> {args.title} </Button>
