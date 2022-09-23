import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducer, { StateType } from '@/store/rootReducer'

const makeStore = () => configureStore<StateType>({ reducer })
export const wrapper = createWrapper(makeStore, { debug: true })
