import { configureStore } from '@reduxjs/toolkit'

import { todoListSlice } from '../modules/todo/todo.slice'

export const store = configureStore({
  'reducer': {
    [todoListSlice.name]: todoListSlice.reducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
