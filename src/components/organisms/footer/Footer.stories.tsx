import { Meta, Story } from '@storybook/react'
import Footer, { FooterProps } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const FooterTemplate = Template.bind({})
