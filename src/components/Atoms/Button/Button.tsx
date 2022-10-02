import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

export type ButtonProps = {
  className?: string
}

export const Button = ({ children, className = 'text-white bg-cyan-400' }: PropsWithChildren<ButtonProps>) => {
  return <button className={clsx(className, 'py-2 px-6 font-semibold rounded-3xl ')}>{children}</button>
}
