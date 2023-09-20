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
      <div className="sm:w-[50%] w-full mr-4">
        <p className="text-white font-bold sm:text-sm text-xs ellipsis-two-line">
          {activeSong?.title || 'No active song'}
        </p>
        <p className="text-gray-300 sm:text-sm text-xs ellipsis-one-line">
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
