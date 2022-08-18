interface IImageRoomModel {
  public_id: string
  url: string
}

type CategoryRoomType = 'King' | 'Single' | 'Twins'

interface IReviewRoomModel {
  user: string // TODO mongoose.Schema.ObjectId,
  name: string
  rating: number
  comment: string
}

interface IUserModel {
  id: string
  // TODO mongoose.Schema.ObjectId
}

export interface IRoomModel {
  name: string
  pricePerNight: number
  description: string
  address: string
  guestCapacity: number
  numOfBeds: number
  internet: boolean
  breakfast: boolean
  airConditioned: boolean
  petsAllowed: boolean
  roomCleaning: boolean
  ratings: number
  numOfReviews: number
  images: IImageRoomModel[]
  category: CategoryRoomType
  reviews: IReviewRoomModel[]
  user: IUserModel
  createdAt: Date
}
