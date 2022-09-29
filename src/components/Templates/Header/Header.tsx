import { Button } from '@/components/Atoms'
import React from 'react'

export const Header = ({}) => {
  return (
    <header className=" px-16 py-4 bg-slate-50 drop-shadow fixed  top-0 left-0 w-full z-10">
      <nav className="flex items-center flex-row  justify-between ">
        <img src="booking.png" alt="booking icon" className="w-40" />
        <Button className="text-sm font-semibold text-white bg-pink-500">Login</Button>
      </nav>
    </header>
  )
}
