import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

const allRooms = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    success: true,
    message: 'All Rooms'
  })
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.get(allRooms)

export default handler
