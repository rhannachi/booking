import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardHeader, CardMedia, CardTitle, CardTitleProps } from './Card'

export type CardStoriesProps = {
  images: string[]
  title: CardTitleProps
  headerTitle: string
  headerSubTitle: string
  content: string
}

export default {
  title: 'Organisms/Card',
  component: Card,
  args: {
    headerTitle: 'Shrimp and Chorizo Paella',
    headerSubTitle: 'September 14, 2016',
    title: {
      prefix: 'Lazard',
      suffix: '33 Euro/nuit'
    },
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    images: [
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg'
    ]
  }
} as Meta<CardStoriesProps>

const Template: Story<CardStoriesProps> = (args) => (
  <Card>
    <CardHeader title={args.headerTitle} subTitle={args.headerSubTitle} />
    <CardMedia images={args.images} />
    <CardTitle prefix={args.title.prefix} suffix={args.title.suffix} />
    <CardContent>{args.content}</CardContent>
  </Card>
)

export const Default = Template.bind({})
