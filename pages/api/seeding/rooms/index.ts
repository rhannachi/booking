import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'
import { addRooms } from 'backEnd/controllers/seeding'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rooms
handler.post(addRooms)

export default handler
