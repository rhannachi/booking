import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import roomsReducer from './rooms'

const combinedReducer = combineReducers({
  roomsReducer
})

export const makeStore = () =>
  configureStore({
    // TODO type this ...
    reducer: (state, action: AnyAction) => {
      if (action.type === HYDRATE) {
        return {
          ...state, // use previous state
          ...action.payload // apply delta from hydration
        }
      } else {
        return combinedReducer(state, action)
      }
    }
  })

// type Store = ReturnType<typeof makeStore>
// export type AppDispatch = Store['dispatch']
// export type RootState = ReturnType<Store['getState']>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper(makeStore, { debug: true })
