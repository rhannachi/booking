import { RoomMongo } from 'backEnd/models'
import { NextApiRequest, NextApiResponse } from 'next'
import { getError } from './helper'

export const allRooms = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await RoomMongo.find()

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

export const addRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // TODO add check body params

    const room = await RoomMongo.create(req.body)

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
