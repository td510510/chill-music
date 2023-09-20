import { useParams } from 'react-router-dom'

import { Error, Loader, SongCard } from '@/components'
import { useGetSearchQuery } from '@/redux/services/musicCore'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'

const SearchResult = () => {
  const { searchTerm } = useParams()
  const { data, isFetching, error } = useGetSearchQuery(searchTerm)

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  const playlist = data?.data?.songs || []

  return (
    <div className="flex flex-col">
      {
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {playlist.map((item: ISongCard, index: number) => (
            <SongCard
              key={`${item?.title} ${index}`}
              artists={item?.artists}
              encodeId={item?.encodeId}
              thumbnail={item?.thumbnail}
              title={item?.title}
              streamingStatus={item?.streamingStatus}
              index={index}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(item, playlist, index)}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default SearchResult
