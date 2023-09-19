import { useRef, useEffect } from 'react'

import { Error, Loader, SongCard } from '@/components'
import { useGetChartHomeQuery } from '@/redux/services/musicCore'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'

const TopCharts = () => {
  const topChartRef = useRef<HTMLDivElement>(null)
  const { data, isFetching, error } = useGetChartHomeQuery('')

  useEffect(() => {
    if (topChartRef.current) {
      topChartRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  const playlist = data?.data?.RTChart?.items || []

  return (
    <div className="flex flex-col" ref={topChartRef}>
      <h2 className="font-bold text-3xl text-white text-left mb-10">Top Charts</h2>
      {playlist.map((item: ISongCard, index: number) => (
        <SongCard
          key={item?.title}
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
  )
}

export default TopCharts
