import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardMedia, CardProps, CardElement } from '@/components/Organisms'
import { cardBookingMock } from '@/components/Organisms/Card/Card.fixtures'

export default {
  title: 'Organisms/Card',
  component: Card,
  args: cardBookingMock,
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => (
  <Card className='h-96'>
    <CardMedia className='rounded-2xl' images={args.images} />
    <CardElement
      className='pt-4'
      prefix={args.elements[0].prefix}
      suffix={args.elements[0].suffix}
    />
    <CardElement prefix={args.elements[1].prefix} />
    <CardContent className='h-12'>{args.content}</CardContent>
  </Card>
)

export const Booking = Template.bind({})
