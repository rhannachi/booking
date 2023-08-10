import { Button } from '@/components/Atoms'

export const Header = () => {
  return (
    <header className=' px-4 md:px-16 h-20 py-4 drop-shadow fixed  top-0 left-0 w-full z-10 bg-white'>
      <nav className='flex items-center flex-row  justify-between '>
        <h1 className='text-3xl font-bold text-cyan-400'>Booking</h1>
        {/* <img src="booking.png" alt="booking icon" className="w-40" />*/}
        <Button className='mt-2 text-white bg-cyan-400'>Login</Button>
        {/* <Icon icon="user" size="4xl" color="cyan-400" />*/}
      </nav>
    </header>
  )
}
