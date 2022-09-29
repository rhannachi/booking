import { roomInitialState, roomSlice } from './room.slice'
import { store } from '@/store'
import { mockNetWorkResponse } from '@/mocks'
import { fetchRooms, FetchRoomsType } from '@/store/room/room.thunk'
import { roomsMockResponse } from '@/mocks/fixtures'
import { ROOM_SLICE_NAME } from '@/helpers'
import { PayloadAction } from '@reduxjs/toolkit'

/**
 * Testing the initial state
 */

test('Should return initial state', () => {
  expect(
    roomSlice.reducer(undefined, {
      type: undefined
    })
  ).toEqual(roomInitialState)
})
/**
 * Testing the fetchUsers thunk
 */

describe('List all rooms', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it('Should be able to fetch the room list', async () => {
    // TODO remove type casting
    const {
      payload: { rooms },
      type
    } = (await store.dispatch(fetchRooms({ origin: '' }))) as PayloadAction<FetchRoomsType>

    expect(type).toBe(`${ROOM_SLICE_NAME}/fetchRooms/fulfilled`)
    expect(rooms).toEqual(roomsMockResponse)

    const state = store.getState().roomReducer
    expect(state.rooms).toEqual(roomsMockResponse)
  })
})
