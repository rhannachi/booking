import { Button, Icon, IconType } from '@/components/Atoms'
import clsx from 'clsx'
import { useEffect } from 'react'

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
  toasts: ToastType[]
  position: PositionToastType
  deleteToast: (id?: string) => void
}

export type ToastsProps = ToastProps & {
  autoDeleteTime: number
  isAutoDelete: boolean
  addToast: (type: ToastType['type']) => void
}

export const Toasts = ({ toasts, isAutoDelete, autoDeleteTime, position, addToast, deleteToast }: ToastsProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoDelete && toasts.length) {
        deleteToast()
      }
    }, autoDeleteTime)

    return () => {
      clearInterval(interval)
    }

    // eslint-disable-next-line
  }, [toasts, isAutoDelete, autoDeleteTime])

  return (
    <>
      <div className="flex flex-nowrap justify-center flex-row  ">
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-green-500')}
          onClick={() => addToast('success')}
        >
          Success
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-red-500')}
          onClick={() => addToast('danger')}
        >
          Danger
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-blue-500')}
          onClick={() => addToast('info')}
        >
          Info
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-yellow-500')}
          onClick={() => addToast('warning')}
        >
          Warning
        </Button>
      </div>

      <Toast deleteToast={deleteToast} toasts={toasts} position={position} />
    </>
  )
}

export const Toast = ({ deleteToast, toasts, position }: ToastProps) => {
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
      {toasts.map((toast, i) => (
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
