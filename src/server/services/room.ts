import { FieldsType, IRoom, ToResearchType } from '@/schemas'
import { Model } from 'mongoose'
import { RoomModel } from '../repository'

// const imagesMapper = (image: IRoomImage) => ({
//   id: image.id,
//   public_id: image.public_id,
//   url: image.url
// })

// const roomMapper = (room: IRoom): IRoom => ({
//   id: room.id,
//   name: room.name,
//   pricePerNight: room.pricePerNight,
//   description: room.description,
//   address: room.address,
//   guestCapacity: room.guestCapacity,
//   numOfBeds: room.numOfBeds,
//   internet: room.internet,
//   breakfast: room.breakfast,
//   airConditioned: room.airConditioned,
//   petsAllowed: room.petsAllowed,
//   roomCleaning: room.roomCleaning,
//   ratings: room.ratings,
//   numOfReviews: room.numOfReviews,
//   images: room.images?.map(imagesMapper),
//   category: room.category,
//   reviews: room.reviews,
//   user: room?.user,
//   createdAt: room.createdAt
// })

export class RoomService {
  readonly roomModel: Model<IRoom>

  constructor() {
    this.roomModel = RoomModel
  }

  hasValidationError(fields: FieldsType): string | undefined {
    const error = new RoomModel(fields).validateSync()
    const message = error?.message

    if (message) {
      return message
    }
  }

  async getRoom(id: string): Promise<IRoom | undefined> {
    const room = await this.roomModel.findById<IRoom>(id)
    if (room !== null) {
      return room
    }
  }

  async getRooms(toResearch: ToResearchType): Promise<IRoom[]> {
    return this.roomModel.find<IRoom>({ ...toResearch })
  }

  async addRoom(fields: FieldsType): Promise<IRoom> {
    const room: IRoom = new RoomModel(fields)
    return this.roomModel.create<IRoom>(room)
  }

  async updateRoom(id: string, fields: FieldsType): Promise<IRoom | undefined> {
    const roomUpdated = await this.roomModel.findByIdAndUpdate<IRoom>(id, fields, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    if (roomUpdated !== null) {
      return roomUpdated
    }
  }

  async deleteRoom(id: string): Promise<string | undefined> {
    const roomDeleted = await this.roomModel.findByIdAndDelete<IRoom>(id)
    return roomDeleted?.id
  }

  async seedingRoom(rooms: IRoom[]): Promise<void> {
    await this.roomModel.deleteMany()
    await this.roomModel.insertMany(rooms)
  }
}
