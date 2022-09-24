import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiDeleteRoomResponse, IApiRoomResponse } from '@/shared/schemas'
import { deleteRoom, getRoom, putRoom } from '@/server'
import { dbConnect } from '@/server/repository'
import { nextOnErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: nextOnErrorMiddleware })

dbConnect()

// GET rom
handler.get<IApiRoomResponse>(getRoom)
// PUT rom
handler.put<IApiRoomResponse>(putRoom)
// DELETED rom
handler.delete<IApiDeleteRoomResponse>(deleteRoom)

export default handler
