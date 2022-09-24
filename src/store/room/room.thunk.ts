import { IApiRoomsResponse, IRoom } from '@/shared/schemas'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ROOM_SLICE_NAME } from '@/helpers/constants'
import { API_GET_ROOMS } from '@/helpers'
import { get } from '@/helpers/http'

type FetchRoomsPayloadType = {
  origin: string
}
type FetchRoomsType = {
  rooms: IRoom[]
}
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
      return { rooms: result.response.rooms }
    }

    return thunkAPI.rejectWithValue({ error: result.error.error })
  }
)
