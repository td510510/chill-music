import { useRef, useEffect, FC } from 'react'

interface PlayerProps {
  activeSong: any
  isPlaying: boolean
  volume: number
  seekTime: number
  onEnded: () => void
  onTimeUpdate: () => void
  onLoadedData: () => void
  repeat: boolean
}

const Player: FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
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
