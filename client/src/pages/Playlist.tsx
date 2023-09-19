import { useParams } from 'react-router-dom'

import { Loader, Error, SongCard, PlaylistDetail } from '@/components/'
import { useGetDetailPlaylistQuery } from '@/redux/services/musicCore'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'

const Playlist = () => {
  const { playlistId } = useParams()

  const { data, isFetching, error } = useGetDetailPlaylistQuery(playlistId)
  const playlist = data?.data || []

  if (isFetching) return <Loader title="Loading songs..." />

  if (error || !playlist || playlist.length === 0) return <Error />

  return (
    <div>
      <PlaylistDetail
        thumbnailM={playlist?.thumbnailM}
        title={playlist?.title}
        lastUpdate={playlist?.contentLastUpdate}
        like={playlist?.like}
        description={playlist?.description}
      />
      <div className="mt-4 mb-10 grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-4" key={playlist?.title}>
        {playlist?.song?.items?.map((item: ISongCard, index: number) => (
          <SongCard
            key={`${item?.title} ${index}`}
            artists={item?.artists}
            encodeId={item?.encodeId}
            thumbnail={item?.thumbnail}
            title={item?.title}
            streamingStatus={item?.streamingStatus}
            index={index}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(item, playlist?.song?.items, index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Playlist
