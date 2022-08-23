import { ApiError, ApiErrorMessageType } from '@/schemas'

type ErrorRoomMessageType =
  | 'Room not found with this ID'
  | 'ID Room is required'
  | 'Room fields are invalid'
  | 'ID Room is invalid'

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
