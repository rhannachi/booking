import { getError } from 'backEnd/helpers'
import { RoomMongo } from 'backEnd/models'
import { NextApiRequest, NextApiResponse } from 'next'
import { IGetRoomApiResponse, IRoomModel } from 'schemas'

export const allRooms = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const rooms = await RoomMongo.find<IRoomModel>()

    res.status(200).json({
      success: true,
      rooms
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: getError(error)
    })
  }
}

export const addRoom = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // TODO add check body params

    const room = await RoomMongo.create<IRoomModel>(req.body)

    res.status(200).json({
      success: true,
      room
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: getError(error)
    })
  }
}

export const getRoom = async (req: NextApiRequest, res: NextApiResponse<IGetRoomApiResponse>): Promise<void> => {
  try {
    // TODO check valid params
    const room = await RoomMongo.findById<IRoomModel>(req.query.id)

    if (room) {
      return res.status(200).json({
        status: 200,
        room
      })
    }

    res.status(404).json({
      status: 404,
      error: 'Room not found with this ID'
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: getError(error)
    })
  }
}
