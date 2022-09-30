import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'

export const SIZES_ICON = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const
export type sizeIconType = typeof SIZES_ICON[number]

// export const COLORS_ICON = ['fill-red-500', 'fill-amber-500', 'fill-blue-500', 'fill-black', 'fill-white'] as const
const SIZES = ['w-5', 'w-6', 'w-7', 'w-8', 'w-9', 'w-10', 'w-11', 'w-12', 'w-14', 'w-16'] as const
type sizeType = typeof SIZES[number]

// to be able to change the size of the Icon, add  viewBox="0 0 25 25" to svg component
export const ICONS = ['star', 'user', 'loader', 'calendar', 'chevron-down'] as const
type IconType = typeof ICONS[number]

export const COLORS_ICON = ['red', 'amber', 'blue', 'black', 'white'] as const
export type colorIconType = typeof COLORS_ICON[number]

export type IconProps = {
  icon: IconType
  size: sizeIconType
  color: colorIconType
  className?: string
}

const getColor = (color: colorIconType) => {
  if (color === 'black' || color === 'white') {
    return `fill-${color}`
  }
  return `fill-${color}-500`
}

const getSize = (size: sizeIconType): sizeType => {
  switch (size) {
    case 'xs':
      return 'w-5'
    case 'sm':
      return 'w-6'
    case 'base':
      return 'w-7'
    case 'lg':
      return 'w-8'
    case 'xl':
      return 'w-9'
    case '2xl':
      return 'w-10'
    case '3xl':
      return 'w-11'
    case '4xl':
      return 'w-12'
    case '5xl':
      return 'w-14'
    case '6xl':
      return 'w-16'
    default:
      return 'w-6'
  }
}

export const Icon = ({ icon = 'user', color, size = 'base', className = '' }: IconProps) => {
  const [iconSrc, setIconSrc] = useState<string>('')

  useEffect(() => {
    const importIcon = async (): Promise<string> => {
      return (await import(`./svgs/${icon}.svg`)).default
    }
    importIcon()
      .then((iconResponse) => setIconSrc(iconResponse))
      .catch(() => setIconSrc(''))
  }, [icon])

  return (
    <ReactSVG
      className={clsx(getColor(color), getSize(size), className)}
      // loading={() => <span>is loading ...</span>}
      src={iconSrc}
    />
  )
}
