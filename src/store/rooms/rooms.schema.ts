export type RoomsStateType = Readonly<{
  isLoading: boolean
  rooms: string[]
}>

export type SetRoomsActionPayloadType = Readonly<{
  rooms: string[]
}>
