import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardHeader, CardMedia, CardTitle } from '@/components/Organisms/Card'
import { CardList, cardListFixture, CardListProps } from '@/components/Organisms/CardList'

export default {
  title: 'Organisms/CardList',
  component: CardList,
  args: {
    cardList: cardListFixture
  }
} as Meta<CardListProps>

const Template: Story<CardListProps> = ({ cardList }) => (
  <CardList>
    {cardList.map(({ header, images, title, content }, index) => (
      <Card key={`${index}-${header.title}`}>
        <CardHeader title={header.title} subTitle={header.subTitle} />
        <CardMedia images={images} />
        <CardTitle prefix={title.prefix} suffix={title.suffix} />
        <CardContent>{content}</CardContent>
      </Card>
    ))}
  </CardList>
)

export const Default = Template.bind({})
