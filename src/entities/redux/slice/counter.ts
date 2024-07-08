import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface userState {
  login: number | null
  username: number | string | null
  role: string | null
  notice: boolean | null
  createdAt: string | null
  scoreMoney: number | null
  scoreSpinning: number | null
}

const initialState: userState = {
  login: null,
  username: null,
  role: null,
  notice: null,
  createdAt: null,
  scoreMoney: null,
  scoreSpinning: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.login = action.payload.login
      state.username = action.payload.username
      state.role = action.payload.role
      state.notice = action.payload.notice
      state.createdAt = action.payload.createdAt
      state.scoreMoney = action.payload.scoreMoney
      state.scoreSpinning = action.payload.scoreSpinning
    },
  },
})

// Action creators are generated for each case reducer function

export const { setUser } = counterSlice.actions

export default counterSlice.reducer
