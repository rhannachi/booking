import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiResponse } from '@/schemas'
import { dbConnect } from '@/server/infra'
import { postRooms } from '@/server/controllers'
import { onErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// POST add rooms
handler.post<IApiResponse>(postRooms)

export default handler
