import { Model, model, models, Schema, Types } from 'mongoose'
import { IRoom, IRoomImage } from '@/shared/schemas'

const RoomImageSchema: Schema<IRoomImage> = new Schema<IRoomImage>({
  // eslint-disable-next-line camelcase
  public_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const RoomSchema: Schema<IRoom> = new Schema<IRoom>({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true,
    maxLength: [100, 'Room name cannot exceed 100 characters'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please enter room price per night'],
    maxLength: [4, 'Room name cannot exceed 4 characters'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  address: {
    type: String,
    required: [true, 'Please enter room address'],
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please enter room guest capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please enter number of beds in room'],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: {
    type: [RoomImageSchema],
    required: true,
  },
  category: {
    type: String,
    required: [true, 'Please enter room category'],
    enum: {
      values: ['King', 'Single', 'Twins'],
      message: 'Please select correct category for room',
    },
  },
  reviews: [
    {
      user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const RoomModel: Model<IRoom> = models.Room || model<IRoom>('Room', RoomSchema)
