import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardHeader, CardMedia, CardProps } from './Card'

export default {
  title: 'Organisms/Card',
  component: Card,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<CardProps>

const Template: Story<CardProps> = () => (
  <Card>
    <CardHeader title="Shrimp and Chorizo Paella" subTitle="September 14, 2016" />
    <CardMedia images={['image_1.png', 'image_2.png']} />
    <CardContent></CardContent>
  </Card>
)

export const CardTemplate = Template.bind({})
