import { RoomMongo } from '@/backEnd/infra'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import { IApiResponse } from 'schemas'
import { makeApiError } from '../makeErrors'
import { rooms } from './mocks'

export const postRooms = async (
  _req: NextApiRequest,
  res: NextApiResponse<IApiResponse>,
  next: NextHandler
): Promise<void> => {
  try {
    await RoomMongo.deleteMany()
    await RoomMongo.insertMany(rooms)

    res.status(200).json({
      status: 200
    })
  } catch (e) {
    next(makeApiError(e))
  }
}
