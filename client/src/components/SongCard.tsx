import { FC } from 'react'
import { Link } from 'react-router-dom'
import PlayPause from './PlayPause'

interface SongCardProps {
  streamingStatus: number
  encodeId: string
  thumbnail: string
  title: string
  artists: []
  duration: number
  index: number
}

const SongCard: FC<SongCardProps> = ({ thumbnail, title, artists }) => {
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <h3 className="font-bold text-base text-white mr-3">1</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img src={thumbnail} alt={title} className="w-20 -h-20 rounded-lg" />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-xl font-bold text-white">{title}</p>
          <p className="text-base text-gray-300 mt-1">
            {artists
              .filter((artist: any) => artist !== undefined)
              .map((artist: { alias: string; name: string }, index: number) => (
                <span key={artist.name}>
                  {index > 0 ? <span>, </span> : ''}
                  <Link to={`/artist/${artist.alias}`} className="hover:underline">
                    {artist.name}
                  </Link>
                </span>
              ))}
          </p>
        </div>
        <PlayPause />
      </div>
    </div>
  )
}

export default SongCard
