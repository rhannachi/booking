import React from 'react'
import { Card, CardContent, CardList, CardListProps, CardMedia, CardElement } from '@/components/Organisms'

export type HomeProps = CardListProps

export const Home = ({ cardList }: HomeProps) => {
  return (
    <>
      {/*<h1 className="font-bold text-3xl text-pink-500 md:mb-10">All Rooms</h1>*/}
      {/*<hr />*/}
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
    </>
  )
}
