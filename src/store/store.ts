import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducer, { StateType } from '@/store/rootReducer'

export const store = configureStore<StateType>({ reducer })
export const wrapper = createWrapper(() => store, { debug: true })
