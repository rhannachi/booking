import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IRoomApiResponse } from '@/schemas'
import { getRoom, putRoom } from '@/backEnd/controllers'
import { dbConnect } from '@/backEnd/infra'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// GET rom
handler.get<IRoomApiResponse>(getRoom)
// PUT rom
handler.put<IRoomApiResponse>(putRoom)

export default handler
