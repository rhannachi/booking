import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'
import { addRoom } from 'backEnd/controllers'
import { IRoomApiResponse } from 'schemas'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rom
handler.post<IRoomApiResponse>(addRoom)

export default handler
