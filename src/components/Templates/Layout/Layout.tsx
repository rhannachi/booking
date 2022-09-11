import React, { ReactNode } from 'react'
import { Header, Footer } from '@/components/Organisms'

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
