import { FC } from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

interface PlayPauseProps {
  isPlaying: boolean
  handlePauseClick: () => void
  handlePlayClick: () => void
}

const PlayPause: FC<PlayPauseProps> = ({ isPlaying, handlePauseClick, handlePlayClick }) => {
  return (
    <>
      {isPlaying ? (
        <FaPauseCircle size={35} className="text-gray-300 cursor-pointer" onClick={handlePauseClick} />
      ) : (
        <FaPlayCircle size={35} className="text-gray-300 cursor-pointer" onClick={handlePlayClick} />
      )}
    </>
  )
}

export default PlayPause
