import { ActionReducerMapBuilder, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { IRoom } from '@/shared/schemas'
import { fetchRooms, FetchRoomsErrorType, FetchRoomsType } from '@/store/room/room.thunk'
import { ROOM_SLICE_NAME } from '@/helpers'

/**
 *  SET ROOMS ACTION
 */
type SetRoomsActionPayloadType = Readonly<{
  rooms: IRoom[]
  all: number
  count: number
  limit: number
}>

const setRooms = (
  state: Draft<RoomsStateType>,
  action: PayloadAction<SetRoomsActionPayloadType>,
) => {
  const { rooms, all, count, limit } = action.payload

  state.rooms = rooms
  state.all = all
  state.count = count
  state.limit = limit
  state.error = ''
  state.isLoading = false
}

/** *
 *  FETCH ROOMS
 */

// PENDING
const fetchRoomsPending = (state: Draft<RoomsStateType>) => {
  state.rooms = []
  state.all = 0
  state.count = 0
  state.limit = 0
  state.isLoading = false
}
// SUCCESS
const fetchRoomsSuccess = (state: Draft<RoomsStateType>, action: PayloadAction<FetchRoomsType>) => {
  const { rooms, all, count, limit } = action.payload
  const newAction: Readonly<PayloadAction<SetRoomsActionPayloadType>> = {
    ...action,
    payload: {
      rooms,
      all,
      count,
      limit,
    },
  }
  roomSlice.caseReducers.setRoomsAction(state, newAction)
}
// REJECTED
const fetchRoomsRejected = (
  state: Draft<RoomsStateType>,
  action: PayloadAction<FetchRoomsErrorType | undefined>,
) => {
  state.rooms = []
  state.all = 0
  state.count = 0
  state.limit = 0
  state.error = action?.payload?.error ?? ''
  state.isLoading = false
}

/** *
 * SLICE ROOM
 */
type RoomsStateType = Readonly<{
  isLoading: boolean
  error: string
  rooms: IRoom[]
  all: number
  count: number
  limit: number
}>

export const roomInitialState: RoomsStateType = {
  rooms: [],
  all: 0,
  count: 0,
  limit: 0,
  error: '',
  isLoading: false,
}
export const roomSlice = createSlice({
  name: ROOM_SLICE_NAME,
  initialState: roomInitialState,
  reducers: {
    setRoomsAction: setRooms,
  },
  extraReducers: (builder: ActionReducerMapBuilder<RoomsStateType>) => {
    builder
      .addCase(fetchRooms.pending, fetchRoomsPending)
      .addCase(fetchRooms.fulfilled, fetchRoomsSuccess)
      .addCase(fetchRooms.rejected, fetchRoomsRejected)
  },
})

export const { setRoomsAction } = roomSlice.actions
