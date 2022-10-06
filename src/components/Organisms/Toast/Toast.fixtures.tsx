import { ToastType } from '@/components/Organisms/Toast/Toast'

// TODO ?????
export const toastListFixture: ToastType[] = [
  {
    id: String(Math.floor(Math.random() * 101 + 1)),
    title: 'Success',
    type: 'success',
    description: 'This is a success toast component',
    className: 'text-white bg-green-500',
    icon: 'star'
  },
  {
    id: String(Math.floor(Math.random() * 101 + 1)),
    title: 'Danger',
    type: 'danger',
    description: 'This is an error toast component',
    className: 'text-white bg-red-500',
    icon: 'search'
  },
  {
    id: String(Math.floor(Math.random() * 101 + 1)),
    title: 'Info',
    type: 'info',
    description: 'This is an info toast component',
    className: 'text-white bg-blue-500',
    icon: 'user'
  },
  {
    id: String(Math.floor(Math.random() * 101 + 1)),
    title: 'Warning',
    type: 'warning',
    description: 'This is a warning toast component',
    className: 'text-white bg-yellow-500',
    icon: 'chevron-down'
  }
]

// export type ButtonToastType = Pick<ToastType, 'type' | 'id'> & {
//   className: string
//   label: string
// }

// export const buttonListActionToastFixture: ButtonToastType[] = [
//   {
//     id: '1',
//     type: 'success',
//     className: 'text-white bg-green-500',
//     label: 'Success'
//   },
//   {
//     id: '2',
//     type: 'danger',
//     className: 'text-white bg-red-500',
//     label: 'Danger'
//   },
//   {
//     id: '3',
//     type: 'info',
//     className: 'text-white bg-blue-500',
//     label: 'Info'
//   },
//   {
//     id: '4',
//     type: 'warning',
//     className: 'text-white bg-yellow-500',
//     label: 'Warning'
//   }
// ]
