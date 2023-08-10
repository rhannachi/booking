export class ApiError extends Error {
  status: ApiErrorStatusType
  extra?: string
  constructor(status: ApiErrorStatusType, message: string, extra?: string) {
    super(message)
    this.status = status
    this.extra = extra
    Error.captureStackTrace(this, this.constructor)
  }
}

export type ApiErrorStatusType = keyof typeof API_RESPONSE_STATUS_MESSAGE
export type ApiErrorMessageType =
  (typeof API_RESPONSE_STATUS_MESSAGE)[keyof typeof API_RESPONSE_STATUS_MESSAGE]

const API_RESPONSE_STATUS_MESSAGE = {
  400: 'HTTP Bad Request',
  404: 'HTTP Not Found',
  500: 'HTTP Internal Server Error',
} as const
