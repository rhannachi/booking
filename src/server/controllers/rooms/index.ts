import { RoomMongo } from '@/server/infra'
import { IRoom, IApiRoomResponse, IApiRoomsResponse, IApiDeleteRoomResponse } from '@/schemas'
import { isValidObjectId } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomIdIsRequired,
  makeErrorRoomNotFound
} from '@/server/factories'
import { nextCatchErrorMiddleware } from '@/server/middlewares'

export const getRooms = nextCatchErrorMiddleware(
  async (_req: NextApiRequest, res: NextApiResponse<IApiRoomsResponse>): Promise<void> => {
    const rooms = await RoomMongo.find<IRoom>()

    res.status(200).json({
      status: 200,
      rooms
    })
  }
)

export const postRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    // TODO check valid params room
    const roomFields = req?.body

    const newRoom: IRoom = await RoomMongo.create<IRoom>(roomFields)

    if (newRoom === null) {
      throw makeErrorRoomFieldsInvalid()
    }

    res.status(200).json({
      status: 200,
      room: newRoom
    })
  }
)

export const getRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    const roomId = req.query?.id

    if (!roomId) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(roomId)) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(roomId)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    res.status(200).json({
      status: 200,
      room
    })
  }
)

export const putRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    const roomId = req.query?.id
    // TODO check valid params room
    const roomFields = req?.body

    if (!roomId) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(roomId)) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(roomId)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    const newRoom = await RoomMongo.findByIdAndUpdate<IRoom>(roomId, roomFields, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    if (newRoom === null) {
      throw makeErrorRoomFieldsInvalid()
    }

    return res.status(200).json({
      status: 200,
      room: newRoom
    })
  }
)

export const deleteRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiDeleteRoomResponse>): Promise<void> => {
    const roomId = req.query?.id

    if (!roomId) {
      throw makeErrorRoomIdIsRequired()
    }

    if (!isValidObjectId(roomId)) {
      throw makeErrorRoomIdInvalid()
    }

    const room = await RoomMongo.findById<IRoom>(roomId)

    if (room === null) {
      throw makeErrorRoomNotFound()
    }

    const deletedRoom = await RoomMongo.findByIdAndDelete<IRoom>(roomId)

    if (deletedRoom === null) {
      throw makeErrorInternalServerError()
    }

    res.status(200).json({
      status: 200,
      id: deletedRoom?.id
    })
  }
)
