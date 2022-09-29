import { ActionReducerMapBuilder, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IRoom } from '@/shared/schemas'
import { fetchRooms, FetchRoomsErrorType, FetchRoomsType } from '@/store/room/room.thunk'
import { ROOM_SLICE_NAME } from '@/helpers/constants'

/**
 *  SET ROOMS ACTION
 */
type SetRoomsActionPayloadType = Readonly<{
  rooms: IRoom[]
}>

const setRooms = (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>) => {
  state.rooms = action.payload.rooms
  state.isLoading = false
}

/***
 *  FETCH ROOMS
 */
// PENDING
const fetchRoomsPending = (state: Draft<RoomsStateType>) => {
  state.rooms = []
  state.isLoading = false
}

// SUCCESS
const fetchRoomsFulfilled = (state: Draft<RoomsStateType>, action: PayloadAction<FetchRoomsType>) => {
  const newAction: Readonly<PayloadAction<SetRoomsActionPayloadType>> = {
    ...action,
    payload: {
      rooms: action.payload.rooms
    }
  }
  roomSlice.caseReducers.setRoomsAction(state, newAction)
}
// REJECTED
const fetchRoomsRejected = (state: Draft<RoomsStateType>, action: PayloadAction<FetchRoomsErrorType | undefined>) => {
  state.rooms = []
  state.error = action?.payload?.error
  state.isLoading = false
}

/***
 * SLICE ROOM
 */
type RoomsStateType = Readonly<{
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
