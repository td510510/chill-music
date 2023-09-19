import { FC } from 'react'

import { getDate } from '@/utils/getDate'

interface PlaylistDetailProps {
  thumbnailM: string
  title: string
  lastUpdate: number
  like: number
  description: string
}

const PlaylistDetail: FC<PlaylistDetailProps> = ({ thumbnailM, title, lastUpdate, like, description }) => {
  return (
    <div className="flex flex-row sm:justify-start justify-center gap-4">
      <div className="sm:w-72 sm:h-72 w-40 h-auto rounded-lg overflow-hidden">
        <img
          className="block w-full hover:scale-105 transition-all ease-in-out duration-300"
          src={thumbnailM}
          alt="thumbnail"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white/75 text-xs mt-2">Cập nhật: {getDate(lastUpdate)}</p>
        <p className="text-white/75 text-xs mt-2">Lượt thích: {like}</p>
        {description ? (
          <h2 className="text-sm text-white text-left sm:mt-8 mt-2 ellipsis-two-line">
            <span className="text-white/75">Lời tựa</span> <span>{description}</span>
          </h2>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default PlaylistDetail
