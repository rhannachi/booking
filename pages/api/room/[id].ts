import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'
import { getRoom } from 'backEnd/controllers'
import { IRoomApiResponse } from 'schemas'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rom
handler.get<IRoomApiResponse>(getRoom)

export default handler
