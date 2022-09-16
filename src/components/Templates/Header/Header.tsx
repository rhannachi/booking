import { Button } from '@/components/Atoms'
import React from 'react'

export const Header = ({}) => {
  return (
    <header className="container px-16 py-4 bg-slate-50 drop-shadow ">
      <nav className="flex items-center flex-row  justify-between ">
        <img src="booking.png" className="w-40" />
        <Button className="text-sm font-semibold text-white bg-pink-500">Login</Button>
      </nav>
    </header>
  )
}
