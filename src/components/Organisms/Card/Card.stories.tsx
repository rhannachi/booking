import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardHeader, CardMedia, CardProps, CardTitle } from '@/components/Organisms'

export default {
  title: 'Organisms/Card',
  component: Card,
  args: {
    header: {
      title: 'Shrimp and Chorizo Paella',
      subTitle: 'Shrimp and Chorizo Paella'
    },
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
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => (
  <Card>
    <CardHeader title={args.header.title} subTitle={args.header.subTitle} />
    <CardMedia images={args.images} />
    <CardTitle prefix={args.title.prefix} suffix={args.title.suffix} />
    <CardContent>{args.content}</CardContent>
  </Card>
)

export const Default = Template.bind({})
