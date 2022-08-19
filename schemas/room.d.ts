import { Document } from 'mongoose'
import { IApiResponse } from './http'

interface IImageRoomModel extends Document {
  public_id: string
  url: string
}

type CategoryRoomType = 'King' | 'Single' | 'Twins'

interface IReviewRoomModel extends Document<string> {
  user: IUserModel['_id'] // TODO mongoose.Schema.ObjectId,
  name: string
  rating: number
  comment: string
}

interface IUserModel extends Document<string> {
  name: string
  // TODO ....
}

export interface IRoomModel extends Document<string> {
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
  user: IUserModel['_id']
  createdAt: Date
}

/**
 * API
 */

export interface IGetRoomApiResponse extends IApiResponse {
  room?: IRoomModel
}
