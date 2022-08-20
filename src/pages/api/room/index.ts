import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiRoomResponse } from 'schemas'
import { dbConnect } from '@/server/infra'
import { postRoom } from '@/server/controllers'
import { onErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// POST add rom
handler.post<IApiRoomResponse>(postRoom)

export default handler
