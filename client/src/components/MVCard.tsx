import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface MVCardProps {
  encodeId: string
  title: string
  thumbnail: string
  artists: []
}

const MVCard: FC<MVCardProps> = ({ encodeId, title, thumbnail, artists }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className=" w-full overflow-hidden rounded-lg" onClick={() => navigate(`/mv/${encodeId}`)}>
        <img
          src={thumbnail}
          alt="song image"
          className="w-full hover:scale-105 transition-all ease-in-out duration-300 object-contain"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/mv/${encodeId}`}>{title}</Link>
        </p>
        <p className="text-xs text-gray-300 mt-1 truncate">
          {artists
            ?.filter((artist: any) => artist !== undefined)
            ?.map((artist: { alias: string; name: string }, index: number) => (
              <span key={artist.name}>
                {index > 0 ? <span>, </span> : ''}
                <Link to={`/artist/${artist?.alias}`} className="hover:underline">
                  {artist?.name}
                </Link>
              </span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default MVCard
