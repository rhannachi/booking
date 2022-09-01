import Button from '@/components/atoms/Button'
import React from 'react'

const Header = ({}) => {
  return (
    <header className="container px-16 py-4 bg-slate-50 drop-shadow ">
      <nav className="flex flex-row items-baseline justify-between ">
        <h1>Booking</h1>
        <Button className="text-sm">Login</Button>
      </nav>
    </header>
  )
}

export default Header
