import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
// import userSvg from './svgs/user.svg'

export const SIZES_ICON = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'] as const
export type sizeIconType = typeof SIZES_ICON[number]

// export const COLORS_ICON = ['fill-red-500', 'fill-amber-500', 'fill-blue-500', 'fill-black', 'fill-white'] as const
// const SIZES = ['w-5', 'w-6', 'w-7', 'w-8', 'w-9', 'w-10', 'w-11', 'w-12', 'w-14', 'w-16'] as const
// type sizeType = typeof SIZES[number]

// to be able to change the size of the Icon, add  viewBox="0 0 25 25" to svg component
export const ICONS = ['star', 'star-full', 'user', 'loader', 'calendar', 'chevron-down'] as const
type IconType = typeof ICONS[number]

export const COLORS_ICON = ['red', 'amber', 'blue', 'black', 'white'] as const
export type colorIconType = typeof COLORS_ICON[number]

export type IconProps = {
  icon: IconType
  size: sizeIconType
  color: colorIconType
  className?: string
}

const importIcon = async (icon: IconType): Promise<string | { src: string }> => {
  return (await import(`./svgs/${icon}.svg`)).default
}

const getColor = (color: colorIconType) => {
  if (color === 'black' || color === 'white') {
    return `fill-${color}`
  }
  return `fill-${color}-500`
}

const getSize = (size: sizeIconType): string => {
  switch (size) {
    case 'xs': // 3
      return 'w-3 h-3'
    case 'sm': // 4
      return 'w-4 h-4'
    case 'base': // 5
      return 'w-5 h-5'
    case 'lg': // 6
      return 'w-6 h-6'
    case 'xl': // 7
      return 'w-7 h-7'
    case '2xl': // 8
      return 'w-8 h-8'
    case '3xl': // 9
      return 'w-9 h-9'
    case '4xl': // 10
      return 'w-10 h-10'
    case '5xl': // 11
      return 'w-11 h-11'
    case '6xl': // 12
      return 'w-12 h-12'
    case '7xl': // 14
      return 'w-14 h-14'
    case '8xl': // 16
      return 'w-16 h-16'
    default:
      return 'w-5 h-5'
  }
}

export const Icon = ({ icon = 'user', color, size = 'base', className = '' }: IconProps) => {
  const [iconSrc, setIconSrc] = useState<string>('')

  useEffect(() => {
    importIcon(icon)
      .then((iconResponse) => {
        if (typeof iconResponse === 'string') {
          setIconSrc(iconResponse)
        } else {
          setIconSrc(iconResponse.src)
        }
      })
      .catch(() => setIconSrc(''))
  }, [icon])

  return (
    <ReactSVG
      className={clsx(getColor(color), getSize(size), className, 'inline')} //
      wrapper="svg"
      // loading={() => <span>is loading ...</span>}
      src={iconSrc}
    />
  )
}
