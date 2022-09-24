import { wrapper } from '@/store'
import absoluteUrl from 'next-absolute-url'
import HomeContainer from '@/containers'
import { connect } from 'react-redux'
import { HomeContainerDispatchType, HomeContainerStateType } from '@/containers/Home.container'
import { StateType } from '@/store/rootReducer'
import { fetchRooms, setRoomsAction } from '@/store/room'
import { ROOM_SLICE_NAME } from '@/helpers/constants'
import { GetServerSideProps, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

type getServerSidePropsType = GetServerSideProps<HomeContainerStateType, ParsedUrlQuery, PreviewData>

export const getServerSideProps: getServerSidePropsType = wrapper.getServerSideProps((store) => async ({ req }) => {
  const { origin } = absoluteUrl(req)
  await store.dispatch(fetchRooms({ origin }))

  return {
    props: {
      isLoading: false,
      rooms: [],
      error: ''
    }
  }
})

const mapStateToProps = (state: StateType): HomeContainerStateType => ({
  rooms: state[ROOM_SLICE_NAME].rooms,
  isLoading: state[ROOM_SLICE_NAME].isLoading
})

const mapDispatchToProps: HomeContainerDispatchType = {
  setRoomsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
