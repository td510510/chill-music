import { FC } from 'react'
import { Link } from 'react-router-dom'
import PlayPause from './PlayPause'

interface SongBarProps {
  song: any
  index: number
  artistId: string
  isPlaying: boolean
  activeSong: any
  handlePauseClick: () => void
  handlePlayClick: (song: any, index: number) => void
}

const SongBar: FC<SongBarProps> = ({
  song,
  index,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'
      } py-2 p-4 rounded-lg cursor-auto mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{index + 1}</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={
            artistId
              ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')
              : song?.images?.coverart
          }
          alt=""
        />
        {!artistId ? (
          <Link to={`/song/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">{song?.attributes?.name}</p>
        )}
        <p className="text-base text-gray-300 mt-1">{artistId ? song?.attributes?.albumName : song?.subtitle}</p>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, index)}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default SongBar
