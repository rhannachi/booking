import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { IRoom } from '@/shared/schemas'
import { fetchRooms } from '@/store/room'
import { fetchRoomsPending, fetchRoomsRejected, fetchRoomsFulfilled, setRooms } from '@/store/room/room.actions'
import { ROOM_SLICE_NAME } from '@/helpers/constants'

export type RoomsStateType = Readonly<{
  isLoading: boolean
  error?: string
  rooms: IRoom[]
}>

export const roomInitialState: RoomsStateType = {
  rooms: [],
  error: '',
  isLoading: false
}

export const roomSlice = createSlice({
  name: ROOM_SLICE_NAME,
  initialState: roomInitialState,
  reducers: {
    setRoomsAction: setRooms
  },
  extraReducers: (builder: ActionReducerMapBuilder<RoomsStateType>) => {
    builder
      .addCase(fetchRooms.pending, fetchRoomsPending)
      .addCase(fetchRooms.fulfilled, fetchRoomsFulfilled)
      .addCase(fetchRooms.rejected, fetchRoomsRejected)
  }
})

export const { setRoomsAction } = roomSlice.actions
