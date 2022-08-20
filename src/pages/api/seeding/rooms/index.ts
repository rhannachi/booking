import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import { IApiResponse } from '@/schemas'
import { dbConnect } from '@/backEnd/infra'
import { postRooms } from '@/backEnd/controllers'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rooms
handler.post<IApiResponse>(postRooms)

export default handler
