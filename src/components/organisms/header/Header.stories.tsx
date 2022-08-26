import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from './Header'

export default {
  title: 'Organisms/Header',
  component: Header
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const HeaderTemplate = Template.bind({})
