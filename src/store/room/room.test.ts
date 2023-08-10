import { roomInitialState, roomSlice } from './room.slice'
import { store } from '@/store'
import { fetchRoomsServiceMock, mockApi } from '@/mocks'
import { fetchRooms, FetchRoomsType } from '@/store/room/room.thunk'
import { ROOM_SLICE_NAME } from '@/helpers'
import { PayloadAction } from '@reduxjs/toolkit'

/**
 * Testing the initial state
 */

test('Should return initial state', () => {
  expect(
    roomSlice.reducer(undefined, {
      type: undefined,
    }),
  ).toEqual(roomInitialState)
})
/**
 * Testing the fetchUsers thunk
 */

describe('List all rooms', () => {
  beforeAll(() => {
    mockApi()
  })

  it('Should be able to fetch the room list', async () => {
    // TODO remove type casting
    const fetchRoomsResponse = (await store.dispatch(
      fetchRooms({ baseUrl: '' }),
    )) as PayloadAction<FetchRoomsType>
    const {
      payload: { rooms, all, count, limit },
      type,
    } = fetchRoomsResponse

    const {
      rooms: roomsMock,
      all: allMock,
      count: countMock,
      limit: limitMock,
    } = fetchRoomsServiceMock

    expect(type).toBe(`${ROOM_SLICE_NAME}/fetchRooms/fulfilled`)
    // check api result
    expect(rooms).toEqual(roomsMock)
    expect(all).toEqual(allMock)
    expect(count).toEqual(countMock)
    expect(limit).toEqual(limitMock)

    const state = store.getState().roomReducer
    // check store change
    expect(state.rooms).toEqual(roomsMock)
    expect(state.all).toEqual(allMock)
    expect(state.count).toEqual(countMock)
    expect(state.limit).toEqual(limitMock)
  })
})
