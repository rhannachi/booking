import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardMedia, CardElement } from '@/components/Organisms/Card'
import { CardList, cardListBookingFixture, CardListProps } from '@/components/Organisms/CardList'

export default {
  title: 'Organisms/CardList',
  component: CardList,
  args: {
    cardList: cardListBookingFixture
  }
} as Meta<CardListProps>

const Template: Story<CardListProps> = ({ cardList }) => (
  <CardList>
    {cardList.map(({ images, elements, content }, index) => (
      <Card key={`${index}-card-booking`}>
        <CardMedia className="rounded-2xl" images={images} />
        <CardElement className="pt-4" prefix={elements[0].prefix} suffix={elements[0].suffix} />
        <CardElement prefix={elements[1].prefix} />
        <CardContent className="h-12">{content}</CardContent>
      </Card>
    ))}
  </CardList>
)

export const Booking = Template.bind({})
