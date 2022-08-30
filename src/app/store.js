import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from "../feature/api/api";
import authReducer from '../feature/auth/authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer

  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)