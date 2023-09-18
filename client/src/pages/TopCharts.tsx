import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Error, Loader, SongCard } from '@/components'
import { useGetChartHomeQuery } from '@/redux/services/musicCore'
import { playPause, setActiveSong } from '@/redux/features/playerSlice'

interface ISongCard {
  streamingStatus: number
  encodeId: string
  thumbnail: string
  title: string
  artists: []
}

const TopCharts = () => {
  const dispatch = useDispatch()
  const topChartRef = useRef<HTMLDivElement>(null)
  const { data, isFetching, error } = useGetChartHomeQuery('')

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song: object, playlist: [], index: number) => {
    dispatch(setActiveSong({ song, playlist, index }))
    dispatch(playPause(true))
  }

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
          key={item.title}
          artists={item.artists}
          encodeId={item.encodeId}
          thumbnail={item.thumbnail}
          title={item.title}
          streamingStatus={item.streamingStatus}
          index={index}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(item, playlist, index)}
        />
      ))}
    </div>
  )
}

export default TopCharts
