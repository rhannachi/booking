import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { setRoomsAction } from '@/store/rooms'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const onClick = () => dispatch(setRoomsAction({ rooms: ['ss'] }))

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Booking project </h1>
        <button onClick={onClick}> click me !</button>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
