import { useParams } from 'react-router-dom'

import { Loader, Error, SongCard, PlaylistDetail } from '@/components/'
import { useGetDetailPlaylistQuery } from '@/redux/services/musicCore'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'

const Playlist = () => {
  const { playlistId } = useParams()

  const { data, isFetching, error } = useGetDetailPlaylistQuery(playlistId)

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  const playlist = data?.data || []

  return (
    <div className="flex xl:flex-row flex-col">
      <PlaylistDetail
        thumbnailM={playlist?.thumbnailM}
        title={playlist?.title}
        lastUpdate={playlist?.contentLastUpdate}
        like={playlist?.like}
        description={playlist?.description}
      />
      <div className="mt-4 mb-10" key={playlist?.title}>
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
