import { Meta, Story } from '@storybook/react'
import { Card, CardContent, CardMedia, CardElement, CardHeader } from '@/components/Organisms/Card'
import { CardList, cardListDefaultFixture, CardListProps } from '@/components/Organisms/CardList'

export default {
  title: 'Organisms/CardList',
  component: CardList,
  args: {
    cardList: cardListDefaultFixture
  }
} as Meta<CardListProps>

const Template: Story<CardListProps> = ({ cardList }) => (
  <CardList>
    {cardList.map(({ header, images, elements, content }, index) => (
      <Card key={`${index}-card-default`} className="shadow-md shadow">
        {header && <CardHeader title={header.title} subTitle={header.subTitle} />}
        <CardMedia images={images} />
        <CardElement className="px-4 pt-4" prefix={elements[0].prefix} suffix={elements[0].suffix} />
        <CardContent className="px-4">{content}</CardContent>
      </Card>
    ))}
  </CardList>
)

export const Default = Template.bind({})
