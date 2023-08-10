import { Meta, Story } from '@storybook/react'
import { Icon, COLORS_ICON, SIZES_ICON, IconProps, ICONS } from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: ICONS,
      control: 'select',
    },
    color: {
      options: COLORS_ICON,
      control: 'select',
    },
    size: {
      options: SIZES_ICON,
      control: 'select',
    },
  },
  args: {
    icon: 'star',
    size: 'base',
    color: 'fill-black',
  },
} as Meta<IconProps>

export const Default: Story<IconProps> = (args) => <Icon {...args} />
