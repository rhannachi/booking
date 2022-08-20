import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/server/infra'
import { getRooms } from '@/server/controllers'
import { IApiRoomsResponse } from '@/schemas'
import { nextOnErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: nextOnErrorMiddleware })

dbConnect()

// GET all rooms
handler.get<IApiRoomsResponse>(getRooms)

export default handler
