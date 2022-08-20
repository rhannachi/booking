import { RoomMongo } from '@/backEnd/models'
import { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from 'schemas'
import { makeApiError } from '../makeErrors'
import { rooms } from './mocks'

export const addRooms = async (_req: NextApiRequest, res: NextApiResponse<IApiResponse>): Promise<void> => {
  try {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)

    res.status(200).json({
      status: 200
    })
  } catch (e) {
    const error = makeApiError(e, 'Controller Seeding addRooms')
    res.status(error.status).json({
      status: error.status,
      error: error.message
    })
  }
}
