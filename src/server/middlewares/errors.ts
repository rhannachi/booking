import { ApiError, IApiResponse } from '@/shared/schemas'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import { makeApiError } from '@/server/factories'

export const nextOnErrorMiddleware = (
  err: ApiError,
  _req: NextApiRequest,
  res: NextApiResponse,
) => {
  res.status(err.status).json({
    status: err.status,
    error: err.message,
  })
}

type controllerType = (
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse>,
  next?: NextHandler,
) => Promise<void>

export const nextCatchErrorMiddleware = (controller: controllerType) => {
  return async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    return Promise.resolve(controller(req, res, next)).catch((e) => next(makeApiError(e)))
  }
}
