import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'

export const SIZES_ICON = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'] as const
type SizeIconType = typeof SIZES_ICON[number]
const SIZES_ICON_CUSTOM = [
  'w-3 h-3',
  'w-4 h-4',
  'w-5 h-5',
  'w-6 h-6',
  'w-7 h-7',
  'w-8 h-8',
  'w-9 h-9',
  'w-10 h-10',
  'w-11 h-11',
  'w-12 h-12',
  'w-14 h-14',
  'w-16 h-16'
] as const
type SizeIconCustomType = typeof SIZES_ICON_CUSTOM[number]

// to be able to change the size of the Icon, add  viewBox="0 0 25 25" to svg component
export const ICONS = ['star', 'star-full', 'user', 'loader', 'calendar', 'chevron-down'] as const
type IconType = typeof ICONS[number]

export const COLORS_ICON = ['cyan-400', 'red-500', 'amber-500', 'blue-500', 'black', 'white'] as const
export type colorIconType = typeof COLORS_ICON[number]

export type IconProps = {
  icon: IconType
  size: SizeIconType
  color?: colorIconType
  className?: string
}

const importIcon = async (icon: IconType): Promise<string | { src: string }> => {
  return (await import(`./svgs/${icon}.svg`)).default
}

const getColor = (color: colorIconType) => `fill-${color}`

const getSize = (size: SizeIconType): SizeIconCustomType => {
  const index = SIZES_ICON.findIndex((item) => item === size)
  return SIZES_ICON_CUSTOM[index]
}

export const Icon = ({ icon = 'user', color = 'black', size = 'base', className = '' }: IconProps) => {
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
