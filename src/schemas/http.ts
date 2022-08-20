const API_RESPONSE_STATUS_MESSAGE = {
  400: 'HTTP Bad Request',
  404: 'HTTP Not Found',
  500: 'HTTP Internal Server Error'
} as const

export type ApiErrorStatusType = keyof typeof API_RESPONSE_STATUS_MESSAGE
export type ApiErrorMessageType = typeof API_RESPONSE_STATUS_MESSAGE[keyof typeof API_RESPONSE_STATUS_MESSAGE]

export class ApiError extends Error {
  status: ApiErrorStatusType
  constructor(status: ApiErrorStatusType, message: string, stack?: string) {
    super()
    this.message = message
    this.status = status
    this.stack = stack
  }
}

export interface IApiResponse {
  status: ApiErrorStatusType | 200
  error?: string
}
