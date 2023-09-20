import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PlayPause from './PlayPause'
import { selectPlayer } from '@/redux/features/playerSlice'

interface SongCardProps {
  streamingStatus: number
  encodeId: string
  thumbnail: string
  title: string
  artists: []
  index: number
  handlePauseClick: () => void
  handlePlayClick: () => void
}

const SongCard: FC<SongCardProps> = ({
  thumbnail,
  title,
  artists,
  streamingStatus,
  encodeId,
  index,
  handlePauseClick,
  handlePlayClick,
}) => {
  const navigate = useNavigate()
  const { activeSong, isPlaying } = useSelector(selectPlayer)

  const handlePlayPauseMusic = () => {
    if (activeSong?.encodeId === encodeId && isPlaying) {
      handlePauseClick()
    } else {
      handlePlayClick()
    }
  }

  const showArtistDetail = (e: MouseEvent<HTMLSpanElement>, artistId: string) => {
    e.stopPropagation()
    navigate(`/artist/${artistId}`)
  }

  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 ${
        streamingStatus === 1 ? '' : 'pointer-events-none'
      } ${activeSong?.encodeId === encodeId ? 'bg-[#4c426e]' : 'bg-transparent'}`}
      onClick={handlePlayPauseMusic}
    >
      <h3 className="font-bold text-xs text-white mr-3">{index + 1}</h3>
      <div className="flex-1 flex flex-row justify-between items-center w-full overflow-hidden">
        <img src={thumbnail} alt={title} className="w-20 -h-20 rounded-lg" />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="sm:text-base text-sm font-bold text-white ellipsis-two-line">{title}</p>
          <p className="text-xs text-gray-300 mt-1 ellipsis-one-line">
            {artists
              ?.filter((artist: any) => artist !== undefined)
              ?.map((artist: { alias: string; name: string }, index: number) => (
                <span key={artist.name}>
                  {index > 0 ? <span>, </span> : ''}
                  <span
                    className="hover:underline"
                    onClick={(e: MouseEvent<HTMLSpanElement>) => showArtistDetail(e, artist?.alias)}
                  >
                    {artist?.name}
                  </span>
                </span>
              ))}
          </p>
        </div>
        {/* Show Song VIP */}
        <div className="text-yellow-500 font-medium mr-4">{streamingStatus === 1 ? '' : 'VIP'}</div>
        <PlayPause isPlaying={isPlaying && activeSong?.encodeId === encodeId} />
      </div>
    </div>
  )
}

export default SongCard
