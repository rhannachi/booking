import { RoomMongo } from '@/server/infra'
import { nextCatchErrorMiddleware } from '@/server/middlewares'
import { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from 'schemas'
import { rooms } from './mocks'

export const postRooms = nextCatchErrorMiddleware(
  async (_req: NextApiRequest, res: NextApiResponse<IApiResponse>): Promise<void> => {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)

    res.status(200).json({
      status: 200
    })
  }
)
