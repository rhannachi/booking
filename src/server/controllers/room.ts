import { IApiDeleteRoomResponse, IApiRoomResponse, IApiRoomsResponse, IRoom } from '@/shared/schemas'
import {
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomNotFound
} from '@/server/factories'
import { QueryType, RoomService, ToResearchType } from '@/server/services'
import { isValidObjectId } from 'mongoose'
import { roomsMocked } from '@/mocks/fixtures'
import { isEmpty, toNumber } from '../helpers'

export class RoomController {
  readonly roomService: RoomService

  constructor() {
    this.roomService = new RoomService()
  }

  async get(id: unknown): Promise<IApiRoomResponse> {
    if (!isValidObjectId(id) || !(typeof id === 'string')) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await this.roomService.getRoom(id)

    if (!room) {
      throw makeErrorRoomNotFound()
    }

    return {
      status: 200,
      room
    }
  }

  async getAll(query: QueryType): Promise<IApiRoomsResponse> {
    if (isEmpty(query)) {
      const all = await this.roomService.count()
      const rooms = await this.roomService.getRooms()
      return {
        status: 200,
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
      status: 200,
      all: rooms.length,
      count: roomsSlice?.length,
      limit,
      rooms: roomsSlice
    }
  }

  async add(body: unknown): Promise<IApiRoomResponse> {
    if (!body || typeof body !== 'object') {
      throw makeErrorRoomFieldsInvalid()
    }

    const messageError = this.roomService.hasValidationError(body)
    if (messageError) {
      throw makeErrorRoomFieldsInvalid(messageError)
    }

    // TODO add check function for fields
    const fields = body as Omit<IRoom, '_id' | 'createdAt'>
    const newRoom = await this.roomService.addRoom(fields)

    if (!newRoom) {
      throw makeErrorRoomFieldsInvalid()
    }

    return {
      status: 200,
      room: newRoom
    }
  }

  async set(id: unknown, body: unknown): Promise<IApiRoomResponse> {
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
    const fields = body as Partial<Omit<IRoom, '_id' | 'createdAt'>>
    const roomUpdated = await this.roomService.updateRoom(id, fields)

    if (!roomUpdated) {
      throw makeErrorRoomFieldsInvalid()
    }

    return {
      status: 200,
      room: roomUpdated
    }
  }

  async delete(id: unknown): Promise<IApiDeleteRoomResponse> {
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

    return {
      status: 200,
      id: roomIdDeleted
    }
  }

  async seeding(): Promise<void> {
    // TODO !!!!!!!!!!! remove the disgusting code !!!!!!!!!!!
    const rooms = roomsMocked.map((room) => {
      let newRoom = { ...room }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete newRoom._id
      const newImages = newRoom?.images.map((image) => {
        const newImage = { ...image }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete newImage._id
        return newImage
      })
      if (newImages) {
        newRoom = {
          ...newRoom,
          images: newImages
        }
      }
      return newRoom
    })

    return this.roomService.seedingRoom(rooms)
  }
}
