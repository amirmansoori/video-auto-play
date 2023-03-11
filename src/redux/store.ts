import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/display/displaySlice'

export const store = configureStore({
  reducer: {
    videos: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
