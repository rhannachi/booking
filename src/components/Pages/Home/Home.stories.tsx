import { Meta, Story } from '@storybook/react'
import { Home, HomeProps } from '@/components/Pages'
import { cardListBookingFixture } from '@/components/Organisms'

export default {
  title: 'Pages/Home',
  component: Home,
  args: {
    cardList: cardListBookingFixture,
  },
} as Meta<HomeProps>

const Template: Story<HomeProps> = ({ cardList }: HomeProps) => <Home cardList={cardList} />

export const Default = Template.bind({})
