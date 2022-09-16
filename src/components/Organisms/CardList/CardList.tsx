import React, { ReactNode, cloneElement, Children, isValidElement } from 'react'
import { CardProps } from '@/components/Organisms'

export type CardListProps = {
  cardList: CardProps[]
}

export const CardList = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="flex flex-row">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { className: 'm-2' })
        }
        return null
      })}
    </div>
  )
}
