import { Meta, Story } from '@storybook/react'
import { Loader, LoaderProps } from './Loader'
import { COLORS_ICON, SIZES_ICON } from '@/components/Atoms'

export default {
  title: 'Molecules/Loader',
  component: Loader,
  argTypes: {
    color: {
      options: COLORS_ICON,
      control: 'select'
    },
    size: {
      options: SIZES_ICON,
      control: 'select'
    }
  },
  args: {
    size: 'base',
    color: 'red-500'
  }
} as Meta<LoaderProps>

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Default = Template.bind({})
