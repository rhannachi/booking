import { Meta, Story } from '@storybook/react'
import { Home } from './Home'

export default {
  title: 'Pages/Home',
  component: Home
} as Meta

const Template: Story<typeof Home> = () => <Home />

export const Default = Template.bind({})
