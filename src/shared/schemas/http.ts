import { ApiErrorStatusType } from './errors'

export interface IApiResponse {
  status: ApiErrorStatusType | 200
}

export interface IApiError extends IApiResponse {
  error: string
}
