import { FC } from 'react'

interface TrackProps {
  isPlaying: boolean
  isActive: boolean
  activeSong: any
}

const Track: FC<TrackProps> = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div className="flex-1 flex items-center justify-start">
      <div
        className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}
      >
        <img src={activeSong?.thumbnail} alt="Cover art" className="rounded-full" />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">{activeSong?.title || 'No active song'}</p>
        <p className="truncate text-gray-300">
          {activeSong.artists
            .filter((artist: any) => artist !== undefined)
            .map((artist: { alias: string; name: string }, index: number) => (
              <span key={artist.name}>
                {index > 0 ? <span>, </span> : ''}
                {artist.name}
              </span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default Track
