import React, { ReactNode } from 'react'
import { Footer } from '@/components/Templates/Footer'
import { Header } from '@/components/Templates/Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="mt-32 mb-20 px-4 md:px-16 flex items-center justify-center">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  )
}
