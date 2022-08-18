import { NextApiRequest, NextApiResponse } from 'next'

export const allRooms = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    success: true,
    message: 'All Rooms'
  })
}

export const newRoom = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const room = await UserModelMongo
  } catch (error) {
    res.status(400).json({
      success: false,
      error: getError(error)
    })
  }
}

const getError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}
