import clsx from 'clsx'
import Image from 'next/image'
import { useState, useRef, useEffect, ReactNode } from 'react'
import { Icon } from '@/components/Atoms'

export const CAROUSEL_HEIGHT = ['h-60', 'h-64', 'h-72', 'h-80', 'h-96'] as const

export type CarouselProps = {
  images: string[]
  imageSize?: typeof CAROUSEL_HEIGHT[number]
  className?: string
}

type ButtonProps = {
  onClick: () => void
  isDisabled: boolean
  children: ReactNode
}

const Button = ({ onClick, isDisabled, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="z-10 w-10 h-full p-0 m-0 text-center text-white transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
    disabled={isDisabled}
  >
    {children}
  </button>
)

export const Carousel = ({ images, imageSize = 'h-96', className = '' }: CarouselProps) => {
  const maxScrollWidth = useRef<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const carousel = useRef<HTMLHeadingElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: 'prev' | 'next'): boolean => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
  }, [])

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <div className="absolute flex justify-between w-full h-full ">
        <Button onClick={movePrev} isDisabled={isDisabled('prev')}>
          <Icon icon="chevron-left" size="5xl" color="fill-white" />
        </Button>
        <Button onClick={moveNext} isDisabled={isDisabled('next')}>
          <Icon icon="chevron-right" size="5xl" color="fill-white" />
        </Button>
      </div>
      <div
        ref={carousel}
        className={clsx('relative z-0 flex  gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x')}
      >
        {images.map((url, index) => {
          return (
            <div
              key={index}
              className={clsx(
                ' relative z-0 block text-center bg-left-top bg-no-repeat bg-cover carousel-item snap-start aspect-square bg-origin-padding',
                `${imageSize}`
              )}
            >
              <Image
                //loader={} TODO add loader
                className="h-full"
                src={url}
                layout="fill"
                objectFit="fill"
                alt="Carousel picture"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
