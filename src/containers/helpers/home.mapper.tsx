import { IRoom } from '@/shared/schemas'
import { CardProps } from '@/components/Organisms'
import { Icon } from '@/components/Atoms'

export const roomCardMapper = (room: IRoom): CardProps => ({
  href: `/room/${room._id}`,
  elements: [
    {
      prefix: room.address,
      suffix: (
        <span className='text-slate-500 text-base'>
          <Icon icon='star-full' color='fill-black' size='xs' /> {room.ratings}
        </span>
      ),
    },
    {
      prefix: (
        <div className='text-base'>
          {room.pricePerNight} <span className='text-slate-500'> €/Night </span>
        </div>
      ),
    },
  ],
  content: room.name,
  images: room.images.map((image) => image.url),
})
