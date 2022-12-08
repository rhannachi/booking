import clsx from 'clsx'
import React, { MouseEvent, PropsWithChildren, ReactNode } from 'react'

export type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void // add addon storybook
}

export const Button = ({ children, className = 'text-white bg-cyan-400', onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={clsx(className, 'py-2 px-6 font-semibold rounded-3xl ')}>
      {children}
    </button>
  )
}
