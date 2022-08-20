import { ApiError, ApiErrorMessageType, ApiErrorStatusType } from '@/schemas'

type ErrorRoomMessageType =
  | 'Room not found with this ID'
  | 'ID Room is required'
  | 'Room fields are invalid'
  | 'ID Room is invalid'

/**
 * Api Error handler
 */

export const makeApiError = (e: unknown, optionalMessage?: string): ApiError => {
  let status: ApiErrorStatusType = 500
  let message: ApiErrorMessageType | string = 'HTTP Internal Server Error'
  let stack: string | undefined = `${optionalMessage}: ${e instanceof Error ? e?.stack : String(e)}`

  // eslint-disable-next-line no-console
  console.error('===> Error:', stack)

  if (e instanceof ApiError) {
    status = e.status
    message = e.message
    stack = e?.stack
  }

  return new ApiError(status, message, stack)
}

export const makeErrorRoomFieldsInvalid = (): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Bad Request'
  const customMessage: ErrorRoomMessageType = 'Room fields are invalid'
  return new ApiError(400, `${message}, ${customMessage}`)
}

export const makeErrorRoomIdInvalid = (): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Bad Request'
  const customMessage: ErrorRoomMessageType = 'ID Room is invalid'
  return new ApiError(400, `${message}, ${customMessage}`)
}

export const makeErrorRoomIdIsRequired = (): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Bad Request'
  const customMessage: ErrorRoomMessageType = 'ID Room is required'
  return new ApiError(400, `${message}, ${customMessage}`)
}

export const makeErrorRoomNotFound = (): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Not Found'
  const customMessage: ErrorRoomMessageType = 'Room not found with this ID'
  return new ApiError(404, `${message}, ${customMessage}`)
}
