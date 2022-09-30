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
    'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
    'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
    'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg'
  ]
})