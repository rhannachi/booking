import { Meta, Story } from '@storybook/react'
import { POSITION_TOAST, Toast, ToastProps, ToastType } from './Toast'
import { toastListFixture } from './Toast.fixtures'
import { Button } from '@/components/Atoms'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default {
  title: 'Organisms/Toast',
  component: Toast,
  argTypes: {
    position: {
      options: POSITION_TOAST,
      control: { type: 'select' }
    }
  },
  args: {
    isAutoDelete: false,
    toastList: toastListFixture,
    autoDeleteTime: 3000,
    position: 'top-left'
  }
} as Meta<ToastProps>

const Template: Story<ToastProps> = (args) => {
  const [list, setList] = useState<ToastType[]>([])

  const showToast = (type: ToastType['type']) => {
    const toast = toastListFixture.find((toast) => toast.type === type)
    toast && setList([...list, toast])
  }

  useEffect(() => {
    setList([])
  }, [args.isAutoDelete, args.autoDeleteTime, args.toastList])

  return (
    <>
      <div className="flex flex-nowrap justify-center flex-row  ">
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-green-500')}
          onClick={() => showToast('success')}
        >
          Success
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-red-500')}
          onClick={() => showToast('danger')}
        >
          Danger
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-blue-500')}
          onClick={() => showToast('info')}
        >
          Info
        </Button>
        <Button
          className={clsx('text-center basis-32 mx-2 w-full', 'text-white bg-yellow-500')}
          onClick={() => showToast('warning')}
        >
          Warning
        </Button>
      </div>

      <Toast
        toastList={list}
        position={args.position}
        isAutoDelete={args.isAutoDelete}
        autoDeleteTime={args.autoDeleteTime}
      />
    </>
  )
}

export const Default = Template.bind({})
