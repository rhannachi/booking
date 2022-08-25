import { ApiErrorStatusType } from './errors'

export interface IApiResponse {
  status: ApiErrorStatusType | 200
  error?: string
}
