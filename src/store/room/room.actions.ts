import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { roomsSlice, RoomsStateType } from './room.slice'
import { IRoom } from '@/shared/schemas'
import { FetchRoomsErrorType } from '@/store/room'

/***
 *  SET ROOMS ACTION
 */
type SetRoomsActionPayloadType = Readonly<{
  rooms: IRoom[]
}>
export const setRooms = (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>): void => {
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
export const fetchRoomsFulfilled = (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>) => {
  roomsSlice.caseReducers.setRoomsAction(state, action)
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
