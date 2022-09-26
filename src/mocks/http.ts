import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { API_GET_ROOMS } from '@/helpers'
import { roomsMocked } from '@/mocks/fixtures'
import { IApiRoomsResponse } from '@/shared/schemas'

const fetchRoomsMockedResponse: IApiRoomsResponse = {
  status: 200,
  all: 8,
  count: 8,
  limit: 8,
  rooms: roomsMocked
}

export const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios)
  mock.onGet(`${API_GET_ROOMS}`).reply(200, fetchRoomsMockedResponse)
  // mock.onGet(`/users/`).reply(200, getUserListResponse);
  // mock.onPost(`/users/`).reply(200, getCreateUserResponse);
  // mock.onPut(`/users/${userId}`).reply(200, getUserUpdateResponse);
  // mock.onDelete(`/users/${userId}`).reply(200);
}
