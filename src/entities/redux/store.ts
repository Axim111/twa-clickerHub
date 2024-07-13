import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/user.ts'

export const store = configureStore({
  reducer: {
    counter: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
