import { Meta, Story } from '@storybook/react'
import { Layout } from './Layout'

export default {
  title: 'Templates/Layout',
  component: Layout,
} as Meta

const Template: Story<typeof Layout> = () => (
  <Layout>
    <div className='h-96'></div>
  </Layout>
)

export const Default = Template.bind({})
