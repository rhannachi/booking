import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiResponse } from '@/schemas'
import { dbConnect } from '@/backEnd/infra'
import { postRooms } from '@/backEnd/controllers'
import { onErrorMiddleware } from '@/backEnd/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// POST add rooms
handler.post<IApiResponse>(postRooms)

export default handler
