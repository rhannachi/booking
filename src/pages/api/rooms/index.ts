import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/backEnd/infra'
import { getRooms } from '@/backEnd/controllers'
import { IApiRoomsResponse } from '@/schemas'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// GET all rooms
handler.get<IApiRoomsResponse>(getRooms)

export default handler
