import React, { ReactNode, cloneElement, Children, isValidElement } from 'react'

type CardListProps = {
  children: ReactNode[]
}

export const CardList = ({ children }: CardListProps) => {
  return (
    <div className="flex flex-row p-4 ">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { className: 'm-2' })
        }
        return null
      })}
    </div>
  )
}
