import { getSong } from '@/apis/song'
import { useRef, useEffect, FC, ChangeEvent, useState } from 'react'
interface PlayerProps {
  activeSongId: string
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
  activeSongId,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const [audioSource, setAudioSource] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  const getCurrentSong = async () => {
    try {
      console.log('call eff')
      const audio = await getSong(activeSongId)
      setAudioSource(audio[128])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCurrentSong()
  }, [activeSongId])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    if (audioRef.current) audioRef.current.currentTime = seekTime
  }, [seekTime])

  return (
    <audio
      ref={audioRef}
      src={audioSource}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player
