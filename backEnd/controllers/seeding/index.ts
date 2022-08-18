import { getError } from 'backEnd/helpers'
import { RoomMongo } from 'backEnd/models'
import { NextApiRequest, NextApiResponse } from 'next'
import { rooms } from './mocks'

export const addRooms = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)

    res.status(200).json({
      success: true
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: getError(error)
    })
  }
}
