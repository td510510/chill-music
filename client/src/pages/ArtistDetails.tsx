import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetArtistQuery, useGetArtistSongsQuery } from '@/redux/services/musicCore'
import { Loader, Error, SongCard } from '@/components'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'

interface ArtistSongsProps {
  artistId: string
}

const ArtistSongs: FC<ArtistSongsProps> = ({ artistId }) => {
  const { data, error } = useGetArtistSongsQuery({ id: artistId, page: 1, count: 20 })

  if (error) return <Error />

  const playlist = data?.data || []

  return (
    <div className="mt-4 mb-10" key={playlist?.title}>
      {playlist?.items?.map((item: ISongCard, index: number) => (
        <SongCard
          key={`${item?.title} ${index}`}
          artists={item?.artists}
          encodeId={item?.encodeId}
          thumbnail={item?.thumbnail}
          title={item?.title}
          streamingStatus={item?.streamingStatus}
          index={index}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(item, playlist?.items, index)}
        />
      ))}
    </div>
  )
}

const ArtistDetails = () => {
  const { artistId } = useParams()
  const { data, isFetching, error } = useGetArtistQuery(artistId)

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  const artist = data?.data || {}

  return (
    <div className="flex xl:flex-row flex-col">
      <div className="flex flex-row sm:justify-start justify-center gap-4">
        <div className="sm:w-72 sm:h-72 w-40 h-auto rounded-lg overflow-hidden">
          <img
            className="block w-full hover:scale-105 transition-all ease-in-out duration-300"
            src={artist?.thumbnailM}
            alt="thumbnail"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold">Nghệ sĩ: {artist?.name}</h3>
          <p className="text-white/75 text-xs mt-2">Tên thật: {artist?.realname}</p>
          <p className="text-white/75 text-xs mt-2">Sinh nhật: {artist?.birthday}</p>
          <p className="text-white/75 text-xs mt-2">{artist?.totalFollow} người theo dõi</p>
        </div>
      </div>
      <ArtistSongs artistId={artist?.id} />
    </div>
  )
}

export default ArtistDetails
