// TODO => https://mui.com/material-ui/react-card/

import React, { PropsWithChildren } from 'react'

export type CardProps = {
  className?: string
}

type CardMediaProps = {
  images: string[]
}

type CardHeaderProps = {
  title: string
  subTitle: string
}

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="">{title}</div>
      <div className="">{subTitle}</div>
    </div>
  )
}

export const CardMedia = ({ images = [] }: CardMediaProps) => {
  return <>{images}</>
}

export const CardContent = ({ children }: PropsWithChildren<CardProps>) => {
  return <>{children}</>
}

export const Card = ({ children }: PropsWithChildren<CardProps>) => {
  return <>{children}</>
}
