import { Document, Types } from 'mongoose'
import { IApiResponse } from './http'

interface IRoomImage extends Document<string> {
  public_id: string
  url: string
}

interface IReviewRoom extends Document<string> {
  user: Types.ObjectId // TODO mongoose.Schema.ObjectId,
  name: string
  rating: number
  comment: string
}

// interface IUser extends Document<string> {
//   name: string
//   // TODO ....
// }

export interface IRoom extends Document<string> {
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
  images: IRoomImage[]
  category: 'King' | 'Single' | 'Twins'
  reviews: IReviewRoom[]
  user?: Types.ObjectId // IUser['_id']
  createdAt?: Date
}

/**
 * API
 */

export interface IApiRoomResponse extends IApiResponse {
  room?: IRoom
}

export interface IApiRoomsResponse extends IApiResponse {
  rooms?: IRoom[]
}

export interface IApiDeleteRoomResponse extends IApiResponse {
  id?: string
}