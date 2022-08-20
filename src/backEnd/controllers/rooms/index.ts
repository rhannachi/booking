import { RoomMongo } from '@/backEnd/infra'
import { IRoom, IApiRoomResponse, IApiRoomsResponse, IApiDeleteRoomResponse } from '@/schemas'
import { isValidObjectId } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import {
  makeApiError,
  makeErrorInternalServerError,
  makeErrorRoomFieldsInvalid,
  makeErrorRoomIdInvalid,
  makeErrorRoomIdIsRequired,
  makeErrorRoomNotFound
} from '../makeErrors'

export const getRooms = async (
  _req: NextApiRequest,
  res: NextApiResponse<IApiRoomsResponse>,
  next: NextHandler
): Promise<void> => {
  try {
    const rooms = await RoomMongo.find<IRoom>()

    res.status(200).json({
      status: 200,
      rooms
    })
  } catch (e) {
    next(makeApiError(e))
  }
}

export const postRoom = async (
  req: NextApiRequest,
  res: NextApiResponse<IApiRoomResponse>,
  next: NextHandler
): Promise<void> => {
  try {
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
  } catch (e) {
    next(makeApiError(e))
  }
}

export const getRoom = async (
  req: NextApiRequest,
  res: NextApiResponse<IApiRoomResponse>,
  next: NextHandler
): Promise<void> => {
  try {
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
  } catch (e) {
    next(makeApiError(e))
  }
}

export const putRoom = async (
  req: NextApiRequest,
  res: NextApiResponse<IApiRoomResponse>,
  next: NextHandler
): Promise<void> => {
  try {
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
  } catch (e) {
    next(makeApiError(e))
  }
}

export const deleteRoom = async (
  req: NextApiRequest,
  res: NextApiResponse<IApiDeleteRoomResponse>,
  next: NextHandler
): Promise<void> => {
  try {
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
  } catch (e) {
    next(makeApiError(e))
  }
}
