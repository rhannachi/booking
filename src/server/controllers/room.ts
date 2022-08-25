import { IRoom } from '@/schemas'
import {
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomNotFound
} from '@/server/factories'
import { QueryType, RoomService, ToResearchType } from '@/server/services'
import { isValidObjectId } from 'mongoose'
import { rooms as roomsMocked } from '@/fixtures'
import { isEmpty, toNumber } from '../helpers'

type GetAllType = {
  all: number
  count: number
  limit: number
  rooms: IRoom[]
}

export class RoomController {
  readonly roomService: RoomService

  constructor() {
    this.roomService = new RoomService()
  }

  async get(id: unknown): Promise<IRoom> {
    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    return room
  }

  async getAll(query: QueryType): Promise<GetAllType | undefined> {
    if (isEmpty(query)) {
      const all = await this.roomService.count()
      const rooms = await this.roomService.getRooms()
      return {
        all,
        count: all,
        limit: all,
        rooms
      }
    }

    let toResearch: ToResearchType = { ...query }

    // pagination
    let page = 1
    if (typeof toResearch?.page === 'string') {
      page = toNumber(toResearch.page, page)
      delete toResearch.page
    }

    // search by address
    if (typeof toResearch?.address === 'string') {
      toResearch = {
        ...toResearch,
        address: {
          $regex: toResearch.address,
          $options: 'i'
        }
      }
    }

    const limit = 4
    const skip = limit * (page - 1)
    const rooms = await this.roomService.getRooms(toResearch)
    const roomsSlice = rooms.slice(skip, skip + limit)

    return {
      all: rooms.length,
      count: roomsSlice?.length,
      limit,
      rooms: roomsSlice
    }
  }

  async add(body: unknown): Promise<IRoom> {
    if (!body || typeof body !== 'object') {
      throw makeErrorRoomFieldsInvalid()
    }

    const messageError = this.roomService.hasValidationError(body)
    if (messageError) {
      throw makeErrorRoomFieldsInvalid(messageError)
    }

    // TODO add check function for fields
    const fields = body as Omit<IRoom, 'id' | 'createdAt'>
    const newRoom = await this.roomService.addRoom(fields)

    if (!newRoom) {
      throw makeErrorRoomFieldsInvalid()
    }

    return newRoom
  }

  async set(id: unknown, body: unknown): Promise<IRoom> {
    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    if (!body || typeof body !== 'object') {
      throw makeErrorRoomFieldsInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    // TODO add check function for fields
    const fields = body as Partial<Omit<IRoom, 'id' | 'createdAt'>>
    const roomUpdated = await this.roomService.updateRoom(id, fields)

    if (!roomUpdated) {
      throw makeErrorRoomFieldsInvalid()
    }

    return roomUpdated
  }

  async delete(id: unknown): Promise<string> {
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
