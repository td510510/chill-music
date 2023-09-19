interface ISongCard {
  streamingStatus: number
  encodeId: string
  thumbnail: string
  title: string
  artists: []
}

interface IPlaylistCard {
  items: []
  title: string
  encodeId: string
  thumbnail: string
  sortDescription: string
}

export type { IPlaylistCard, ISongCard }
