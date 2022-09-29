import React from 'react'
import { Card, CardContent, CardHeader, CardList, CardListProps, CardMedia, CardTitle } from '@/components/Organisms'

export type HomeProps = CardListProps

export const Home = ({ cardList }: HomeProps) => {
  return (
    <>
      <h1 className="font-bold text-3xl text-pink-500 md:mb-10">All Rooms</h1>
      {/*<hr />*/}
      <CardList>
        {cardList?.map(({ header, images, title, content }, index) => (
          <Card key={`${index}-${header.title}`}>
            <CardHeader title={header.title} subTitle={header.subTitle} />
            <CardMedia images={images} />
            <CardTitle prefix={title.prefix} suffix={title.suffix} />
            <CardContent>{content}</CardContent>
          </Card>
        ))}
      </CardList>
    </>
  )
}
