import { Meta, Story } from '@storybook/react'
import { Home, HomeProps } from '@/components/Pages'
import { cardListFixture } from '@/components/Organisms'

export default {
  title: 'Pages/Home',
  component: Home,
  args: {
    cardList: cardListFixture
  }
} as Meta<HomeProps>

const Template: Story<HomeProps> = ({ cardList }) => <Home cardList={cardList} />

export const Default = Template.bind({})
