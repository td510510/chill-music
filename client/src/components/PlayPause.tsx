import { FC } from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

interface PlayPauseProps {
  isPlaying: boolean
}

const PlayPause: FC<PlayPauseProps> = ({ isPlaying }) => {
  return (
    <>
      {isPlaying ? (
        <FaPauseCircle size={35} className="text-gray-300 cursor-pointer" />
      ) : (
        <FaPlayCircle size={35} className="text-gray-300 cursor-pointer" />
      )}
    </>
  )
}

export default PlayPause
