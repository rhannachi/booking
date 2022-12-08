import { ToastType } from '@/components/Organisms/Toast/Toast'

export const toastListFixture: ToastType[] = [
  {
    id: '123',
    title: 'Success',
    type: 'success',
    description: 'This is a success toast component',
    className: 'text-white bg-green-500',
    icon: 'star'
  },
  {
    id: '123',
    title: 'Danger',
    type: 'danger',
    description: 'This is an error toast component',
    className: 'text-white bg-red-500',
    icon: 'search'
  },
  {
    id: '123',
    title: 'Info',
    type: 'info',
    description: 'This is an info toast component',
    className: 'text-white bg-blue-500',
    icon: 'user'
  },
  {
    id: '123',
    title: 'Warning',
    type: 'warning',
    description: 'This is a warning toast component',
    className: 'text-white bg-yellow-500',
    icon: 'chevron-down'
  }
]
