import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { roomsSlice, RoomsStateType } from './room.reducer'
import { IRoom } from '@/schemas'

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
 *  FETCH ROOMS PENDING
 */
export const fetchRoomsPending = (state: Draft<RoomsStateType>) => {
  state.rooms = []
  state.isLoading = false
}

/***
 *  FETCH ROOMS SUCCESS
 */
export const fetchRoomsFulfilled = (state: Draft<RoomsStateType>, action: PayloadAction<SetRoomsActionPayloadType>) => {
  roomsSlice.caseReducers.setRoomsAction(state, action)
}

/***
 *  FETCH ROOMS REJECTED
 */
export const fetchRoomsRejected = (state: Draft<RoomsStateType>, action: any) => {
  state.rooms = []
  state.error = action.error.message
  state.isLoading = false
}
