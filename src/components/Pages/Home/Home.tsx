import React from 'react'
import { Card, CardContent, CardList, CardListProps, CardMedia, CardElement } from '@/components/Organisms'
import { SearchField } from '@/components/Molecules'

export type HomeProps = CardListProps

const Home = ({ cardList }: HomeProps) => {
  return (
    <>
      {/*<h1 className="font-bold text-3xl text-pink-500 md:mb-10">All Rooms</h1>*/}
      {/*<hr />*/}
      <div className="flex justify-center my-16">
        <SearchField className="w-5/6 md:w-1/2  " />
      </div>

      <CardList>
        {cardList.map(({ images, elements, content, href }, index) => (
          <Card key={`${index}-card-booking`} href={href} className="h-96">
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

export default Home
