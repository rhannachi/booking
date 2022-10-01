import React, { ReactNode, cloneElement, Children, isValidElement } from 'react'
import { CardProps } from '@/components/Organisms/Card'

export type CardListProps = {
  cardList: CardProps[]
}

export const CardList = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="flex flex-wrap flex-row lg:justify-start justify-center">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { className: `m-2 ${child.props.className}` })
        }
        return null
      })}
    </div>
  )
}
