import { Meta, Story } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer
} as Meta

const Template: Story<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
