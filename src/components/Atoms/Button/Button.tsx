import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  className?: string
}

export const Button = ({ children, className }: PropsWithChildren<ButtonProps>) => {
  return <button className={clsx(className, 'py-2 px-5 text-white bg-blue-500 rounded-md ')}>{children}</button>
}
