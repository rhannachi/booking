import { IApiRoomsResponse } from '@/shared/schemas'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ROOM_SLICE_NAME } from '@/helpers'
import { fetchRoomsService } from '@/services'

type FetchRoomsPayloadType = {
  baseUrl: string
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
  async ({ baseUrl }, thunkAPI) => {
    const result = await fetchRoomsService(baseUrl)

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
