import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'

const allRooms = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    success: true,
    message: 'All Rooms'
  })
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

handler.get(allRooms)

export default handler
