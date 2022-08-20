import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiDeleteRoomResponse, IApiRoomResponse } from '@/schemas'
import { deleteRoom, getRoom, putRoom } from '@/backEnd/controllers'
import { dbConnect } from '@/backEnd/infra'
import { onErrorMiddleware } from '@/backEnd/middlewares'

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError: onErrorMiddleware })

dbConnect()

// GET rom
handler.get<IApiRoomResponse>(getRoom)
// PUT rom
handler.put<IApiRoomResponse>(putRoom)
// DELETED rom
handler.delete<IApiDeleteRoomResponse>(deleteRoom)

export default handler
