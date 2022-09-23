import { IApiRoomsResponse, IRoom } from '@/schemas'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ROOM_SLICE_NAME } from '@/store/constants'

type FetchRoomsPayloadType = {
  origin: string
}
type FetchRoomsType = {
  rooms: IRoom[]
}

export const fetchRooms = createAsyncThunk<
  FetchRoomsType,
  FetchRoomsPayloadType,
  {
    rejectValue: string
  }
>(`${ROOM_SLICE_NAME}/fetchRooms`, async ({ origin }) => {
  try {
    const {
      data: { rooms, status }
    } = await axios.get<IApiRoomsResponse>(`${origin}/api/rooms`)

    if (status === 200) {
      return { rooms }
    }
    // TODO remove any and check type error
  } catch (error: any) {
    return error.toString()
  }
})
