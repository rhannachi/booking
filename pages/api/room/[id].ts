import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'backEnd/infra/db'
import { getRoom } from 'backEnd/controllers'
import { IGetRoomApiResponse } from 'schemas'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

dbConnect()

// POST add rom
handler.get<IGetRoomApiResponse>(getRoom)

export default handler
