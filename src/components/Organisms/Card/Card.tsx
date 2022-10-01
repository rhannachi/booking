import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { Carousel } from '@/components/Molecules'

export type CardProps = CardMediaProps & {
  elements: CardElementProps[]
  header?: CardHeaderProps
  content: string
}

type CardMediaProps = {
  images: string[]
  className?: string
}

type CardHeaderProps = {
  title: string
  subTitle: string | JSX.Element
}

export type CardElementProps = {
  prefix: string | JSX.Element
  suffix?: string | JSX.Element
  className?: string
}

type CardContentProps = {
  children: ReactNode
  className?: string
}

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="text-base ">{title}</div>
      <div className="text-sm text-slate-500">{subTitle}</div>
    </div>
  )
}

export const CardMedia = ({ images = [], className }: CardMediaProps) => {
  return <Carousel className={className} imageSize="h-80" images={images} />
}

export const CardElement = ({ prefix, suffix = '', className }: CardElementProps) => {
  return (
    <div className={clsx('flex flex-row justify-between  ', className)}>
      <div className="basis-3/4 truncate pr-2 text-base">{prefix}</div>
      <div className="basis-1/4 truncate text-right text-sm	">{suffix}</div>
    </div>
  )
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div
      className={clsx('pt-2 mb-4  text-sm text-justify text-slate-500 overflow-hidden text-ellipsis h-16', className)}
    >
      {children}
    </div>
  )
}

export const Card = ({ children, className }: CardContentProps) => {
  return <div className={clsx('flex flex-col w-xs w-72', className)}>{children}</div>
}
