import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counter';
import playerReducer from './slices/playerSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    player: playerReducer
  },
})

export default store
