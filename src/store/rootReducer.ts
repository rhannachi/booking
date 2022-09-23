import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { roomsSlice } from './room'
import { HYDRATE } from 'next-redux-wrapper'

export const combinedReducer = combineReducers({
  [roomsSlice.name]: roomsSlice.reducer
})
export type StateType = ReturnType<typeof combinedReducer>

const reducer = (state: StateType | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    // eslint-disable-next-line no-console
    console.log('____________ HYDRATE: ', { nextState }, { state }, { payload: action.payload })
    return nextState
  }
  return combinedReducer(state, action)
}

export default reducer
