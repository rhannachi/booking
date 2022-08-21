import { IRoom } from '@/schemas'
import {
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomIdIsRequired,
  makeErrorRoomNotFound
} from '@/server/factories'
import { RoomMongo } from '@/server/infra'
import { isValidObjectId } from 'mongoose'
import { rooms } from './mocks'

type fieldsType = Record<string, string | boolean | number | object>

export class RoomController {
  /**
   *
   * @param id: id room
   * @returns Promise<IRoom>
   */
  async get(id: unknown): Promise<IRoom> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(id)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    return room
  }

  /**
   *
   * @returns Promise<IRoom[]>
   */
  async getAll(): Promise<IRoom[]> {
    const rooms: IRoom[] = await RoomMongo.find<IRoom>()
    return rooms
  }

  /**
   *
   * @param fields : fields room
   * @returns Promise<IRoom>
   */
  async add(fields: fieldsType): Promise<IRoom> {
    const room: IRoom = new RoomMongo(fields)
    const error = room.validateSync()

    if (error?.message) {
      throw makeErrorRoomFieldsInvalid(error?.message)
    }

    const newRoom: IRoom = await RoomMongo.create<IRoom>(fields)

    if (newRoom === null) {
      throw makeErrorRoomFieldsInvalid()
    }

    return newRoom
  }

  /**
   *
   * @param id : id room
   * @param fields : fields room
   * @returns Promise<IRoom>
   */
  async set(id: unknown, fields: fieldsType): Promise<IRoom> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(id)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    const newRoom = await RoomMongo.findByIdAndUpdate<IRoom>(id, fields, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    if (newRoom === null) {
      throw makeErrorRoomFieldsInvalid()
    }

    return newRoom
  }

  /**
   *
   * @param id room di
   * @returns string: id room deleted
   */
  async delete(id: unknown): Promise<string> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(id)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    const deletedRoom = await RoomMongo.findByIdAndDelete<IRoom>(id)

    if (deletedRoom === null) {
      throw makeErrorInternalServerError()
    }

    return deletedRoom?.id
  }

  /**
   * seeding rooms
   */
  async seeding(): Promise<void> {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)
  }
}
