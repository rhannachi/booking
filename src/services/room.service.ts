import { get, KO, OK } from '@/services/http'
import { IApiRoomsResponse } from '@/shared/schemas'

export const API_FETCH_ROOMS = '/api/rooms' as const

// FETCH ROOMS
export type FetchRoomsServiceType = (baseUrl: string) => Promise<KO | OK<IApiRoomsResponse>>
export const fetchRoomsService: FetchRoomsServiceType = (baseUrl) => get<IApiRoomsResponse>(baseUrl, API_FETCH_ROOMS)
