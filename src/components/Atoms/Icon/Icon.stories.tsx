import { Meta, Story } from '@storybook/react'
import { Icon, ICON_COLORS, ICON_WIDTHS, IconProps, ICONS } from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: ICONS,
      control: 'select'
    },
    color: {
      options: ICON_COLORS,
      control: 'select'
    },
    width: {
      options: ICON_WIDTHS,
      control: 'select'
    }
  },
  args: {
    icon: 'star',
    width: 'w-6',
    color: 'fill-black'
  }
} as Meta<IconProps>

export const Default: Story<IconProps> = (args) => <Icon {...args} />
