import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicCoreApi = createApi({
  reducerPath: 'musicCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (builder) => ({
    getHomePlayList: builder.query({ query: () => '/home' }),
    getArtist: builder.query({ query: (name) => `/artist?name=${name}` }),
    getDetailPlaylist: builder.query({ query: (id) => `/detail-playlist?id=${id}` }),
    getLyric: builder.query({ query: (id) => `/lyric?id=${id}` }),
    getMV: builder.query({ query: (id) => `/video?id=${id}` }),
    getListMV: builder.query({ query: ({ id, page, count }) => `/list-mv?id=${id}&page=${page}&count=${count}` }),
    getSearch: builder.query({ query: (keyword) => `/search?keyword=${keyword}` }),
    getSong: builder.query({ query: (id) => `/song?id=${id}` }),
    getInfoSong: builder.query({ query: (id) => `/info-song?id=${id}` }),
    getTop100: builder.query({ query: () => '/top100' }),
    getChartHome: builder.query({ query: () => '/chart-home' }),
  }),
})

export const {
  useGetHomePlayListQuery,
  useGetArtistQuery,
  useGetDetailPlaylistQuery,
  useGetLyricQuery,
  useGetMVQuery,
  useGetListMVQuery,
  useGetSearchQuery,
  useGetSongQuery,
  useGetInfoSongQuery,
  useGetTop100Query,
  useGetChartHomeQuery,
} = musicCoreApi
