import { Meta, Story } from '@storybook/react'
import { POSITION_TOAST, Toast, Toasts, ToastsProps, ToastType } from './Toast'
import { toastListFixture } from './Toast.fixtures'
import { useState } from 'react'

type TemplateProps = Pick<ToastsProps, 'isAutoDelete' | 'position' | 'autoDeleteTime'> & {
  toastsMocks: ToastType[]
}

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
    toastsMocks: toastListFixture,
    autoDeleteTime: 3000,
    position: 'top-left'
  }
} as Meta<TemplateProps>

const Template: Story<TemplateProps> = ({ toastsMocks, position, isAutoDelete, autoDeleteTime }) => {
  const [list, setList] = useState<ToastType[]>([])

  const addToast = (type: ToastType['type']) => {
    const toast = toastsMocks.find((toast) => toast.type === type)
    if (toast) {
      setList([
        ...list,
        {
          ...toast,
          id: String(Math.floor(Math.random() * 10000 + 1))
        }
      ])
    }
  }

  const deleteToast = (id?: string): void => {
    if (id) {
      setList(list.filter((item) => item.id !== id))
    } else {
      setList(list.slice(1))
    }
  }

  return (
    <Toasts
      toasts={list}
      position={position}
      isAutoDelete={isAutoDelete}
      autoDeleteTime={autoDeleteTime}
      deleteToast={deleteToast}
      addToast={addToast}
    />
  )
}

export const Default = Template.bind({})
