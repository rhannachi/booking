import { ApiError, ApiErrorMessageType, ApiErrorStatusType } from '@/schemas'

type ErrorRoomMessageType =
  | 'Room not found with this ID'
  | 'ID Room is required'
  | 'Room fields are invalid'
  | 'ID Room is invalid'

/**
 * Api Error handler
 */

export const makeApiError = (e: unknown): ApiError => {
  let status: ApiErrorStatusType = 500
  let message: ApiErrorMessageType | string = 'HTTP Internal Server Error'
  let extra: string | undefined
  // TODO add save error stack into mongo

  if (e instanceof ApiError) {
    status = e.status
    message = e.message
  } else if (e instanceof Error) {
    extra = e.stack
  }

  const error = new ApiError(status, message, extra)
  // eslint-disable-next-line no-console
  console.dir({
    error: {
      status: error.status,
      message: error?.message,
      extra: error?.extra,
      stack: error?.stack
    }
  })
  return error
}

export const makeErrorInternalServerError = (): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Internal Server Error'
  return new ApiError(500, message)
}

export const makeErrorRoomFieldsInvalid = (cause?: string): ApiError => {
  const message: ApiErrorMessageType = 'HTTP Bad Request'
  const customMessage: ErrorRoomMessageType | string = cause ?? 'Room fields are invalid'
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
