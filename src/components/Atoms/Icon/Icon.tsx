import clsx from 'clsx'
import React from 'react'
import { ReactSVG } from 'react-svg'
import starSvg from './svgs/star.svg'
import userSvg from './svgs/user.svg'

export const ICONS = ['star', 'user'] as const
export const ICON_COLORS = ['fill-red-50', 'fill-red-100', 'fill-red-200', 'fill-black', 'fill-white'] as const
export const ICON_WIDTHS = ['w-5', 'w-6', 'w-7']

type IconType = typeof ICONS[number]
type IconColorType = typeof ICON_COLORS[number]
type IconWidthType = typeof ICON_WIDTHS[number]

export type IconProps = {
  icon: IconType
  width: IconWidthType
  color: IconColorType
}

const getSvg = (icon: IconProps['icon']): string => {
  switch (icon) {
    case 'star':
      return starSvg.toString()
    case 'user':
      return userSvg.toString()
    default:
      return ''
  }
}

const Icon = ({ icon, color, width = 'w-5' }: IconProps) => {
  return <ReactSVG className={clsx(width, color)} src={getSvg(icon)} />
}

export default Icon
