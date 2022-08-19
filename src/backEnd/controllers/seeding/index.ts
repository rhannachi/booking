import { getError } from '@/backEnd/helpers'
import { RoomMongo } from '@/backEnd/models'
import { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from 'schemas'
import { rooms } from './mocks'

export const addRooms = async (_req: NextApiRequest, res: NextApiResponse<IApiResponse>): Promise<void> => {
  try {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)

    res.status(200).json({
      status: 200
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: getError(error)
    })
  }
}
