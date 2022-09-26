import { IApiRoomsResponse } from '@/shared/schemas'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ROOM_SLICE_NAME } from '@/helpers/constants'
import { API_GET_ROOMS } from '@/helpers'
import { get } from '@/services'

export type FetchRoomsPayloadType = {
  origin: string
}
export type FetchRoomsType = Omit<IApiRoomsResponse, 'status'>

export type FetchRoomsErrorType = {
  error: string
}
type FetchRoomsRejectType = {
  rejectValue: FetchRoomsErrorType
}

export const fetchRooms = createAsyncThunk<FetchRoomsType, FetchRoomsPayloadType, FetchRoomsRejectType>(
  `${ROOM_SLICE_NAME}/fetchRooms`,
  async ({ origin }, thunkAPI) => {
    const result = await get<IApiRoomsResponse>(origin, API_GET_ROOMS)

    if (result.status === 'OK') {
      const { rooms, all, count, limit } = result.response
      return {
        rooms,
        all,
        count,
        limit
      }
    }

    return thunkAPI.rejectWithValue({ error: result.error.error })
  }
)
