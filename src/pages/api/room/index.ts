import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiRoomResponse } from 'schemas'
import { dbConnect } from '@/backEnd/infra'
import { postRoom } from '@/backEnd/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rom
handler.post<IApiRoomResponse>(postRoom)

export default handler
