import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'
import { allRooms } from 'backEnd/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

handler.get(allRooms)

export default handler
