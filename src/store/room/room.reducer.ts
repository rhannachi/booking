import { createSlice } from '@reduxjs/toolkit'
import { IRoom } from '@/schemas'
import { fetchRooms } from '@/store/room'
import { fetchRoomsPending, fetchRoomsRejected, fetchRoomsFulfilled, setRooms } from '@/store/room/room.actions'
import { ROOM_SLICE_NAME } from '@/store/constants'

export type RoomsStateType = Readonly<{
  isLoading: boolean
  error?: string
  rooms: IRoom[]
}>

const initialState: RoomsStateType = {
  rooms: [],
  error: '',
  isLoading: false
}

export const roomsSlice = createSlice({
  name: ROOM_SLICE_NAME,
  initialState,
  reducers: {
    setRoomsAction: setRooms
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, fetchRoomsPending)
    builder.addCase(fetchRooms.fulfilled, fetchRoomsFulfilled)
    builder.addCase(fetchRooms.rejected, fetchRoomsRejected)
  }
})

export const { setRoomsAction } = roomsSlice.actions
