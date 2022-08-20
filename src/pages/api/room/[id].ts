import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiDeleteRoomResponse, IApiRoomResponse } from '@/schemas'
import { deleteRoom, getRoom, putRoom } from '@/server/controllers'
import { dbConnect } from '@/server/infra'
import { onErrorMiddleware } from '@/server/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// GET rom
handler.get<IApiRoomResponse>(getRoom)
// PUT rom
handler.put<IApiRoomResponse>(putRoom)
// DELETED rom
handler.delete<IApiDeleteRoomResponse>(deleteRoom)

export default handler
