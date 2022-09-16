import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Carousel } from '@/components/Molecules'

export type CardProps = CardMediaProps & {
  title: CardTitleProps
  header: CardHeaderProps
  content: string
}

type CardMediaProps = {
  images: string[]
}

type CardHeaderProps = {
  title: string
  subTitle: string
}

export type CardTitleProps = {
  prefix: string
  suffix: string
}

type CardContentProps = {
  children: ReactNode
}

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="text-base ">{title}</div>
      <div className="text-sm text-slate-500">{subTitle}</div>
    </div>
  )
}

export const CardMedia = ({ images = [] }: CardMediaProps) => {
  return <Carousel imageSize="h-80" images={images} />
}

export const CardTitle = ({ prefix, suffix }: CardTitleProps) => {
  return (
    <div className="flex flex-row justify-between px-4 pt-4 text-base">
      <div>{prefix}</div>
      <div className="">{suffix}</div>
    </div>
  )
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="px-4 pt-2 pb-4 text-sm text-justify text-slate-500">{children}</div>
}

export const Card = ({
  children,
  className
}: CardContentProps & {
  className?: string
}) => {
  return <div className={clsx('flex flex-col max-w-xs shadow-md shadow', className)}>{children}</div>
}
