import { Icon } from '@/components/Atoms'
import { imagesCarouselMock } from '@/components/Molecules'

export const cardBookingMock = {
  elements: [
    {
      prefix: 'Bicetown Street, New York, NY, 10004',
      suffix: (
        <span className="text-slate-500 text-base">
          <Icon icon="star-full" color="black" size="xs" /> 4,9
        </span>
      )
    },
    {
      prefix: (
        <div className="text-base">
          33 <span className="text-slate-500"> €/Night </span>
        </div>
      )
    }
  ],
  content: 'Picturesque 2-Story Farmhouse w/Private Hot Tub',
  images: imagesCarouselMock
}

export const cardDefaultMock = {
  header: {
    title: 'Tiny house',
    subTitle: (
      <div className="flex flex-nowrap flex-row">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className="basis-3/4">At Amanda's</div>
        <div className="basis-1/4 text-end text-base">
          <Icon icon="star-full" color="black" size="xs" /> 4,9
        </div>
      </div>
    )
  },
  elements: [
    {
      prefix: 'Bicetown Street, New York',
      suffix: (
        <div className="text-base">
          33 <span className="text-slate-500"> €/Night </span>
        </div>
      )
    }
  ],
  content:
    'A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from the vacation rental,',
  images: imagesCarouselMock
}
