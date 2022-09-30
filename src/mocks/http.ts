import axios from 'axios'
import { roomsMockResponse } from '@/mocks/fixtures'
import { IApiRoomsResponse } from '@/shared/schemas'
import MockAdapter from 'axios-mock-adapter'
import { API_FETCH_ROOMS } from '@/services/room.service'

export const fetchRoomsServiceMock: IApiRoomsResponse = {
  status: 200,
  all: 8,
  count: 8,
  limit: 8,
  rooms: roomsMockResponse
}

export const mockApi = () => {
  const mock = new MockAdapter(axios)
  mock.onGet(`${API_FETCH_ROOMS}`).reply(200, fetchRoomsServiceMock)
  // mock.onGet(`/users/`).reply(200, getUserListResponse);
  // mock.onPost(`/users/`).reply(200, getCreateUserResponse);
  // mock.onPut(`/users/${userId}`).reply(200, getUserUpdateResponse);
  // mock.onDelete(`/users/${userId}`).reply(200);
}
