import { FieldsType, IRoom, QueryType, ToResearchType } from '@/schemas'
import {
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomIdIsRequired,
  makeErrorRoomNotFound
} from '@/server/factories'
import { RoomService } from '@/server/services'
import { isValidObjectId } from 'mongoose'
import { rooms as roomsMocked } from '@/fixtures'

export class RoomController {
  readonly roomService: RoomService

  constructor() {
    this.roomService = new RoomService()
  }

  async get(id: unknown): Promise<IRoom> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    return room
  }

  async getAll(query: QueryType): Promise<IRoom[] | undefined> {
    let toResearch: ToResearchType = { ...query }

    const address = query?.address

    if (typeof address === 'string') {
      toResearch = {
        ...toResearch,
        address: {
          $regex: address,
          $options: 'i'
        }
      }
    }

    return this.roomService.getRooms(toResearch)
  }

  async add(fields: FieldsType): Promise<IRoom> {
    const messageError = this.roomService.hasValidationError(fields)

    if (messageError) {
      throw makeErrorRoomFieldsInvalid(messageError)
    }

    const newRoom = await this.roomService.addRoom(fields)

    if (!newRoom) {
      throw makeErrorRoomFieldsInvalid()
    }

    return newRoom
  }

  async set(id: unknown, fields: FieldsType): Promise<IRoom> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    const roomUpdated = await this.roomService.updateRoom(id, fields)

    if (!roomUpdated) {
      throw makeErrorRoomFieldsInvalid()
    }

    return roomUpdated
  }

  async delete(id: unknown): Promise<string> {
    if (!id) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    const roomIdDeleted = await this.roomService.deleteRoom(id)

    if (!roomIdDeleted) {
      throw makeErrorInternalServerError()
    }

    return roomIdDeleted
  }

  async seeding(): Promise<void> {
    // TODO remove unknown and fix this
    return this.roomService.seedingRoom(roomsMocked as unknown as IRoom[])
  }
}
