import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IRoomApiResponse } from '@/schemas'
import { getRoom } from '@/backEnd/controllers'
import { dbConnect } from '@/backEnd/infra'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rom
handler.get<IRoomApiResponse>(getRoom)

export default handler
