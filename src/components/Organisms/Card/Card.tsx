import clsx from 'clsx'
import { ReactNode } from 'react'
import { Carousel } from '@/components/Molecules'
import Link from 'next/link'

export type CardProps = CardMediaProps &
  Pick<CardContentProps, 'href'> & {
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
  href?: string
  children: ReactNode
  className?: string
}

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <div className='flex flex-col p-4'>
      <div>{title}</div>
      <div className='text-slate-500'>{subTitle}</div>
    </div>
  )
}

export const CardMedia = ({ images = [], className }: CardMediaProps) => {
  return <Carousel className={className} imageSize='h-72' images={images} />
}

export const CardElement = ({ prefix, suffix = '', className }: CardElementProps) => {
  return (
    <div className={clsx('flex flex-row justify-between', className)}>
      <div className='basis-2/3 truncate pr-2'>{prefix}</div>
      <div className='basis-1/3 truncate text-right'>{suffix}</div>
    </div>
  )
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div
      className={clsx(
        'pt-1 text-sm text-justify text-slate-500 overflow-hidden text-ellipsis',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const Card = ({ children, href, className }: CardContentProps) => {
  return (
    <div className={clsx('flex flex-col w-72', className)}>
      {href && (
        <Link href={href}>
          <a>
            <div className=' w-72 h-96 absolute z-10' />
          </a>
        </Link>
      )}
      {children}
    </div>
  )
}
