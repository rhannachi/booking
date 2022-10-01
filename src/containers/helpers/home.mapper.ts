import { IRoom } from '@/shared/schemas'
import { CardProps } from '@/components/Organisms'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const roomCardMapper = (room: IRoom): CardProps => ({
  header: {
    title: 'Shrimp and Chorizo Paella',
    subTitle: 'Shrimp and Chorizo Paella'
  },
  title: {
    prefix: 'Lazard',
    suffix: '33 Euro/nuit'
  },
  content:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  images: [
    'https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/e3ebda9a-3268-4ec8-9903-98f85f0bf767.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=720'
  ]
})
