import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { musicCoreApi } from './services/musicCore'
import playerReducer from './features/playerSlice'

// export const store = configureStore({
//   reducer: {
//     [musicCoreApi.reducerPath]: musicCoreApi.reducer,
//     player: playerReducer,
//   },

//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicCoreApi.middleware),
// })

const reducers = combineReducers({
  [musicCoreApi.reducerPath]: musicCoreApi.reducer,
  player: playerReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['player'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(musicCoreApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
