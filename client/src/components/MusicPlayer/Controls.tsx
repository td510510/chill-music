import { Dispatch, SetStateAction, FC } from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'

interface ControlsProps {
  isPlaying: boolean
  repeat: boolean
  setRepeat: Dispatch<SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: Dispatch<SetStateAction<boolean>>
  currentSongs: any[]
  handlePlayPause: () => void
  handlePrevSong: () => void
  handleNextSong: () => void
}

const Controls: FC<ControlsProps> = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80 gap-1">
      <BsArrowRepeat
        size={20}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)}
        className="cursor-pointer"
      />
      {currentSongs?.length && (
        <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
      )}
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      {currentSongs?.length && (
        <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)}
        className="cursor-pointer"
      />
    </div>
  )
}

export default Controls
