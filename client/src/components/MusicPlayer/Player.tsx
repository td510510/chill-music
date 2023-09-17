import { useRef, useEffect, FC, ChangeEvent } from 'react'

interface PlayerProps {
  activeSong: any
  isPlaying: boolean
  volume: number
  seekTime: number
  currentIndex: number
  onEnded: () => void
  onTimeUpdate: (e: ChangeEvent<HTMLAudioElement>) => void
  onLoadedData: (e: ChangeEvent<HTMLAudioElement>) => void
  repeat: boolean
}

const Player: FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  currentIndex,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    if (audioRef.current) audioRef.current.currentTime = seekTime
  }, [seekTime])

  return (
    <audio
      ref={audioRef}
      src={activeSong?.hub?.action[1]?.uri}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player
