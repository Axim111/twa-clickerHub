import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '../../type/user'

export const initialStateUser: IUserState = {
  login: null,
  username: null,
  role: null,
  notice: null,
  createdAt: null,
  scoreMoney: null,
  scoreSpinning: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialStateUser,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
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

export const { setUser } = userSlice.actions

export default userSlice.reducer
