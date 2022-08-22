import { ApiError, ApiErrorMessageType, ApiErrorStatusType } from '@/schemas'

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
