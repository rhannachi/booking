import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from './Card'

type CardStorieProps = {
  images: string[]
  title: string
  headerTitle: string
  headerSubTitle: string
  content: string
}

export default {
  title: 'Organisms/Card',
  component: Card,
  argTypes: {
    images: {
      control: {
        type: 'object'
      }
    }
  },
  args: {
    headerTitle: 'Shrimp and Chorizo Paella',
    headerSubTitle: 'September 14, 2016',
    title: 'Lizard',
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    images: [
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg'
    ]
  }
} as Meta<CardStorieProps>

const Template: Story<CardStorieProps> = (args) => (
  <Card>
    <CardHeader title={args.headerTitle} subTitle={args.headerSubTitle} />
    <CardMedia images={args.images} />
    <CardTitle>{args.title}</CardTitle>
    <CardContent>{args.content}</CardContent>
  </Card>
)

export const Default = Template.bind({})
