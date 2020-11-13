import { createSlice } from '@reduxjs/toolkit'

const initialState = { sound: {} }

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSound(state, action) {
      state.sound = action.payload
    }
  },
})

export const { setSound } = playerSlice.actions
export default playerSlice.reducer
