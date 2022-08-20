import { ApiError } from '@/schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export const onErrorMiddleware = (err: ApiError, _req: NextApiRequest, res: NextApiResponse, _next: NextHandler) => {
  res.status(err.status).json({
    status: err.status,
    error: err.message
  })
}
