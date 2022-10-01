import { Card, CardContent, CardHeader, CardMedia, CardProps, CardElement } from '@/components/Organisms'
import { Meta, Story } from '@storybook/react'
import { cardDefaultMock } from '@/components/Organisms/Card/Card.fixtures'

export default {
  title: 'Organisms/Card',
  component: Card,
  args: cardDefaultMock
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => (
  <Card className="shadow-md shadow">
    {args.header && <CardHeader title={args.header.title} subTitle={args.header.subTitle} />}
    <CardMedia images={args.images} />
    <CardElement className="px-4 pt-4" prefix={args.elements[0].prefix} suffix={args.elements[0].suffix} />
    <CardContent className="px-4 mb-4 h-16">{args.content}</CardContent>
  </Card>
)

export const Default = Template.bind({})
