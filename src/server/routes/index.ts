import { IApiRoomResponse, IApiRoomsResponse, IApiDeleteRoomResponse, IApiResponse } from '@/schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { nextCatchErrorMiddleware } from '@/server/middlewares'
import { RoomController } from '@/server/controllers'

export const getRooms = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomsResponse>): Promise<void> => {
    const rooms = await new RoomController().getAll(req.query)

    res.status(200).json({
      status: 200,
      rooms
    })
  }
)

export const postRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    const room = await new RoomController().add(req?.body)

    res.status(200).json({
      status: 200,
      room
    })
  }
)

export const getRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    const room = await new RoomController().get(req.query?.id)

    res.status(200).json({
      status: 200,
      room
    })
  }
)

export const putRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiRoomResponse>): Promise<void> => {
    const room = await new RoomController().set(req.query?.id, req?.body)

    return res.status(200).json({
      status: 200,
      room
    })
  }
)

export const deleteRoom = nextCatchErrorMiddleware(
  async (req: NextApiRequest, res: NextApiResponse<IApiDeleteRoomResponse>): Promise<void> => {
    const id = await new RoomController().delete(req.query?.id)

    res.status(200).json({
      status: 200,
      id
    })
  }
)

export const postRooms = nextCatchErrorMiddleware(
  async (_req: NextApiRequest, res: NextApiResponse<IApiResponse>): Promise<void> => {
    await new RoomController().seeding()

    res.status(200).json({
      status: 200
    })
  }
)
