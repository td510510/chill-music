import { useState, useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { nextSong, prevSong, playPause, selectPlayer } from '@/redux/features/playerSlice'
import Controls from './Controls'
import Player from './Player'
import SeekBar from './SeekBar'
import Track from './Track'
import VolumeBar from './VolumeBar'

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector(selectPlayer)
  const [duration, setDuration] = useState<number>(0)
  const [seekTime, setSeekTime] = useState<number>(0)
  const [appTime, setAppTime] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.3)
  const [repeat, setRepeat] = useState<boolean>(false)
  const [shuffle, setShuffle] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true))
  }, [currentIndex])

  const handlePlayPause = () => {
    if (!isActive) return

    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  }

  const handleNextSong = () => {
    dispatch(playPause(true))

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
    }
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1))
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
    } else {
      dispatch(prevSong(currentIndex - 1))
    }
  }

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <SeekBar
          value={appTime}
          min={0}
          max={duration}
          onInput={(e: ChangeEvent<HTMLInputElement>) => setSeekTime(+e.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(e: ChangeEvent<HTMLAudioElement>) => setAppTime(e.target.currentTime)}
          onLoadedData={(e: ChangeEvent<HTMLAudioElement>) => setDuration(e.target.duration)}
        />
        <VolumeBar
          volume={volume}
          value={volume}
          min={0}
          max={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume(+e.target.value)}
          setVolume={setVolume}
        />
      </div>
    </div>
  )
}

export default MusicPlayer
