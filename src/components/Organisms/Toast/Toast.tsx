import { useEffect, useState } from 'react'
import { Icon, IconType } from '@/components/Atoms'
import clsx from 'clsx'

export const POSITION_TOAST = ['top-right', 'top-left', 'bottom-left', 'bottom-right'] as const
type PositionToastType = typeof POSITION_TOAST[number]

export type ToastType = {
  id: string
  title: string
  type: 'success' | 'danger' | 'info' | 'warning'
  description: string
  className: string
  icon: IconType
}

export type ToastProps = {
  toastList: ToastType[]
  position: PositionToastType
  isAutoDelete: boolean
  autoDeleteTime: number
}

export const Toast = ({ toastList, position, isAutoDelete, autoDeleteTime }: ToastProps) => {
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id)
      }
    }, autoDeleteTime)

    return () => {
      clearInterval(interval)
    }

    // eslint-disable-next-line
  }, [toastList, isAutoDelete, autoDeleteTime, list])

  const deleteToast = (id: string): void => {
    const listItemIndex = list.findIndex((e) => e.id === id)
    const toastListItem = toastList.findIndex((e) => e.id === id)
    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  return (
    <div
      className={clsx(
        `box-border fixed z-40`,
        position === 'top-right' && 'top-0 right-0',
        position === 'top-left' && 'top-0 left-0',
        position === 'bottom-right' && 'bottom-0 right-0 ',
        position === 'bottom-left' && 'bottom-0 left-0'
      )}
    >
      {list.map((toast, i) => (
        <div
          key={i}
          className={clsx(
            toast.className,
            'w-96 max-h-24 m-1 p-3 transition ease-in-out relative overflow-hidden pointer-events-auto rounded-lg shadow bg-no-repeat opacity-90 hover:shadow-lg hover:opacity-100 hover:cursor-pointer'
          )}
        >
          <button
            className="relative right-0 top-0 float-right font-bold text-white opacity-80 leading-4 text-lg p-0 cursor-pointer border-0  "
            onClick={() => deleteToast(toast.id)}
          >
            X
          </button>
          <div className="float-left mr-3">
            <Icon icon={toast.icon} color="fill-white" size="lg" />
          </div>
          <div>
            <p className="font-bold text-base text-left mt-0 mb-3 ">{toast.title}</p>
            <p className="text-left overflow-hidden whitespace-nowrap ">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
