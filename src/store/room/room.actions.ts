import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { roomSlice, RoomsStateType } from './room.slice'
import { FetchRoomsErrorType, FetchRoomsType } from '@/store/room'
import { IRoom } from '@/shared/schemas'

/***
 *  SET ROOMS ACTION
 */
type SetRoomsActionPayloadType = Readonly<{
  rooms: IRoom[]
}>

export const setRooms = (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>) => {
  state.rooms = action.payload.rooms
  state.isLoading = false
}

/***
 *  FETCH ROOMS
 */
// PENDING
export const fetchRoomsPending = (state: Draft<RoomsStateType>) => {
  state.rooms = []
  state.isLoading = false
}

// SUCCESS
export const fetchRoomsFulfilled = (state: Draft<RoomsStateType>, action: PayloadAction<FetchRoomsType>) => {
  const newAction: Readonly<PayloadAction<SetRoomsActionPayloadType>> = {
    ...action,
    payload: {
      rooms: action.payload.rooms
    }
  }

  roomSlice.caseReducers.setRoomsAction(state, newAction)
}
// REJECTED
export const fetchRoomsRejected = (
  state: Draft<RoomsStateType>,
  action: PayloadAction<FetchRoomsErrorType | undefined>
) => {
  state.rooms = []
  state.error = action?.payload?.error
  state.isLoading = false
}
/***
 *  FETCH ....
 */
