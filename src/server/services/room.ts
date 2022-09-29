import { IRoom } from '@/shared/schemas'
import { Model } from 'mongoose'
import { RoomModel } from '../repository'
import { roomsMockPayload } from '@/mocks/fixtures'

export type QueryType = Record<string, string | string[] | undefined>

export type ToResearchType =
  | QueryType
  | {
      address: {
        $regex: string
        $options: 'i' | 'g'
      }
    }

export class RoomService {
  readonly roomModel: Model<IRoom>

  constructor() {
    this.roomModel = RoomModel
  }

  hasValidationError(fields: object): string | undefined {
    const error = new RoomModel(fields).validateSync()
    const message = error?.message

    if (message) {
      return message
    }
  }

  async count(): Promise<number> {
    return this.roomModel.countDocuments()
  }

  async getRoom(id: string): Promise<IRoom | undefined> {
    const room = await this.roomModel.findById<IRoom>(id)
    if (room !== null) {
      return room
    }
  }

  async getRooms(toResearch?: ToResearchType): Promise<IRoom[]> {
    return this.roomModel.find<IRoom>({ ...toResearch })
  }

  async addRoom(roomInput: Omit<IRoom, '_id' | 'createdAt'>): Promise<IRoom> {
    const room: IRoom = new RoomModel(roomInput)
    return this.roomModel.create<IRoom>(room)
  }

  async updateRoom(id: string, roomInput: Partial<Omit<IRoom, '_id' | 'createdAt'>>): Promise<IRoom | undefined> {
    const roomUpdated = await this.roomModel.findByIdAndUpdate<IRoom>(id, roomInput, {
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
    return roomDeleted?._id
  }

  async seedingRoom(): Promise<void> {
    await this.roomModel.deleteMany()
    await this.roomModel.insertMany(roomsMockPayload)
  }
}
