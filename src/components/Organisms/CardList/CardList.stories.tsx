import { Meta, Story } from '@storybook/react'
import { CardList } from './CardList'
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from '@/components/Organisms'
import { CardStoriesProps } from '@/components/Organisms/Card/Card.stories'

type CardListStoriesProps = {
  cardList: CardStoriesProps[]
}

const cardList: CardStoriesProps[] = [
  {
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
  },
  {
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
]

export default {
  title: 'Organisms/CardList',
  component: CardList,
  args: {
    cardList
  }
} as Meta<CardListStoriesProps>

const Template: Story<CardListStoriesProps> = ({ cardList }) => (
  <CardList>
    {cardList.map(({ headerTitle, headerSubTitle, images, title, content }, index) => (
      <Card key={`${index}-${headerTitle}`}>
        <CardHeader title={headerTitle} subTitle={headerSubTitle} />
        <CardMedia images={images} />
        <CardTitle prefix={title.prefix} suffix={title.suffix} />
        <CardContent>{content}</CardContent>
      </Card>
    ))}
  </CardList>
)

export const Default = Template.bind({})
