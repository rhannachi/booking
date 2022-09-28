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
      {children}
      <Footer />
    </>
  )
}
