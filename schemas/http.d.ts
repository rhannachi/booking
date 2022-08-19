export interface IApiResponse {
  status: 200 | 400 | 404 | 500
  error?: string
}
