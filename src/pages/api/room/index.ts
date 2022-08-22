import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiRoomResponse } from 'schemas'
import { dbConnect } from '@/server/repository'
import { postRoom } from '@/server'
import { nextOnErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: nextOnErrorMiddleware })

dbConnect()

// POST add rom
handler.post<IApiRoomResponse>(postRoom)

export default handler
