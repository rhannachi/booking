import { wrapper } from '@/store/store'
import absoluteUrl from 'next-absolute-url'
import HomeContainer from '@/containers'
import { connect } from 'react-redux'
import { HomeContainerDispatchType, HomeContainerStateType } from '@/containers/Home.container'
import { StateType } from '@/store/rootReducer'
import { fetchRooms, setRoomsAction } from '@/store/room'
import { ROOM_SLICE_NAME } from '@/store/constants'

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  // console.log('store state on the server before dispatch', store.getState())

  const { origin } = absoluteUrl(req)
  await store.dispatch(fetchRooms({ origin }))

  // console.log('store state on the server after dispatch', store.getState())

  // TODO remove this ???
  return { props: '' }
})

const mapStateToProps = (state: StateType): HomeContainerStateType => ({
  rooms: state[ROOM_SLICE_NAME].rooms,
  isLoading: state[ROOM_SLICE_NAME].isLoading
})

const mapDispatchToProps: HomeContainerDispatchType = {
  setRoomsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
