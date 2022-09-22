import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { RoomsStateType, SetRoomsActionPayloadType } from './rooms.schema'

const initialState: RoomsStateType = {
  rooms: [],
  isLoading: false
}

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRoomsAction: (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>) => {
      return {
        ...state,
        isLoading: false,
        rooms: action.payload.rooms
      }
    }
  }
})

export const { setRoomsAction } = roomsSlice.actions

export default roomsSlice.reducer
