import { Icon } from '@/components/Atoms'
import React from 'react'

export const Header = ({}) => {
  return (
    <header className=" px-4 md:px-16 h-20 py-4 bg-pink-400 drop-shadow fixed  top-0 left-0 w-full z-10">
      <nav className="flex items-center flex-row  justify-between ">
        <h1 className="text-3xl font-bold text-white">Booking</h1>
        {/*<img src="booking.png" alt="booking icon" className="w-40" />*/}
        {/*<Button className="text-sm font-semibold text-white bg-pink-500">Login</Button>*/}
        <Icon icon="user" size="4xl" color="white" />
      </nav>
    </header>
  )
}
