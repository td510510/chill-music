import { FC, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface PlaylistCardProps {
  title: string
  sortDescription?: string
  thumbnail: string
  id: string
}

const PlaylistCard: FC<PlaylistCardProps> = ({ title, sortDescription, thumbnail, id }) => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/playlist/${id}`)}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt="song image"
          className="w-full h-full min-h-[50px] hover:scale-105 transition-all ease-in-out duration-500 blur-3xl"
          loading="lazy"
          onLoad={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.classList.remove('blur-3xl')
          }}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold md:text-lg text-base text-white truncate">{title}</p>
        <p className="text-sm text-gray-300 mt-1 truncate">{sortDescription}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
