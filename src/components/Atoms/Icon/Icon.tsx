import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

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

export const Icon = ({ icon = 'user', color, width = 'w-5' }: IconProps) => {
  const [iconSrc, setIconSrc] = useState<string>('')

  useEffect(() => {
    const importIcon = async (): Promise<string> => {
      return (await import(`./svgs/${icon}.svg`)).default
    }
    importIcon()
      .then((iconResponse) => setIconSrc(iconResponse))
      .catch(() => setIconSrc(''))
  }, [icon])

  return <ReactSVG className={clsx(width, color)} src={iconSrc} />
}
