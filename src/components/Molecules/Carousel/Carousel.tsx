import clsx from 'clsx'
import { useState, useRef, useEffect, ReactNode } from 'react'

export const CAROUSEL_HEIGHT = ['h-60', 'h-64', 'h-72', 'h-80', 'h-96'] as const

export type CarouselProps = {
  images: string[]
  imageSize?: typeof CAROUSEL_HEIGHT[number]
}

type ButtonProps = {
  onClick: () => void
  isDisabled: boolean
  children: ReactNode
}

const Button = ({ onClick, isDisabled, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="z-10 w-10 h-full p-0 m-0 text-center text-white transition-all duration-300 ease-in-out opacity-75 hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
    disabled={isDisabled}
  >
    {children}
  </button>
)

export const Carousel = ({ images, imageSize = 'h-96' }: CarouselProps) => {
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
    <div className="relative overflow-hidden">
      <div className="absolute flex justify-between w-full h-full ">
        {/*  */}
        <Button onClick={movePrev} isDisabled={isDisabled('prev')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-12 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        <Button onClick={moveNext} isDisabled={isDisabled('next')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-12 -ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
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
              style={{ backgroundImage: `url(${url})` }}
            />
          )
        })}
      </div>
    </div>
  )
}
