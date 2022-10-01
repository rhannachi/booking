import { Meta, Story } from '@storybook/react'
import { Icon, COLORS_ICON, SIZES_ICON, IconProps, ICONS } from './Icon'
import React from 'react'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: ICONS,
      control: 'select'
    },
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
    icon: 'star',
    size: 'base',
    color: 'red'
  }
} as Meta<IconProps>

export const Default: Story<IconProps> = (args) => (
  <span>
    current text ...
    <Icon {...args} />
    ....
  </span>
)
