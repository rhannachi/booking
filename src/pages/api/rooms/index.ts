import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/backEnd/infra'
import { getRooms } from '@/backEnd/controllers'
import { IApiRoomsResponse } from '@/schemas'
import { onErrorMiddleware } from '@/backEnd/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// GET all rooms
handler.get<IApiRoomsResponse>(getRooms)

export default handler
