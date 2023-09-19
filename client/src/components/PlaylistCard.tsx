import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

import { FC } from 'react'
// import PlayPause from './PlayPause'
// import { playPause, setActiveSong } from '@/redux/features/playerSlice'

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
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/playlist/${id}`)}
    >
      <div className="h-56 w-full overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt="song image"
          className="w-full h-full hover:scale-105 transition-all ease-in-out duration-300"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">{title}</p>
        <p className="text-sm text-gray-300 mt-1 truncate">{sortDescription}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
