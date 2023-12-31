import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IPlayer {
  currentSongs: any[]
  currentIndex: number
  isActive: boolean
  isPlaying: boolean
  activeSong: any
  genreListId: string
}

const initialState: IPlayer = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<{ song: object; playlist: []; index: number }>) => {
      state.activeSong = action.payload.song
      state.currentSongs = action.payload.playlist
      state.currentIndex = action.payload.index
      state.isActive = true
    },

    nextSong: (state, action: PayloadAction<any>) => {
      if (state.currentSongs[action.payload].track) {
        state.activeSong = state.currentSongs[action.payload].track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }

      state.currentIndex = action.payload
      state.isActive = true
    },

    prevSong: (state, action: PayloadAction<any>) => {
      if (state.currentSongs[action.payload].track) {
        state.activeSong = state.currentSongs[action.payload].track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }

      state.currentIndex = action.payload
      state.isActive = true
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },

    selectGenreListId: (state, action: PayloadAction<string>) => {
      state.genreListId = action.payload
    },
  },
})

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player

export default playerSlice.reducer
