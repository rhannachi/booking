import { Meta, Story } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Organisms/Header',
  component: Header
} as Meta

const Template: Story<typeof Header> = (args) => <Header {...args} />

export const HeaderTemplate = Template.bind({})
