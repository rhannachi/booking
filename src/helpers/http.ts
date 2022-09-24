import axios, { AxiosError, AxiosResponse } from 'axios'
import { IApiError } from '@/shared/schemas'

type OK<T> = { status: 'OK'; response: T }
type KO = { status: 'KO'; error: IApiError }
type Result<T> = OK<T> | KO

const api = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json'
    }
  })

const okTransform = <T>(response: AxiosResponse<T>): OK<T> => {
  return Object.freeze({ status: 'OK', response: response.data })
}

const koTransform = (err: AxiosError<IApiError>): KO => {
  const error = err.response?.data
  if (error) {
    return { status: 'KO', error }
  }
  return { status: 'KO', error: { status: 500, error: 'Internal Application error' } }
}

/**
 * get Http
 * @param baseUrl
 * @param url
 */
export const get = async <T>(baseUrl: string, url: string): Promise<Result<T>> => {
  return new Promise((resolve) => {
    api(baseUrl)
      .get<T>(url)
      .then((response: AxiosResponse<T>) => resolve(okTransform<T>(response)))
      .catch((error: AxiosError<IApiError>) => resolve(koTransform(error)))
  })
}
