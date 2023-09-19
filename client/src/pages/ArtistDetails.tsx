import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { useGetArtistQuery, useGetArtistSongsQuery } from '@/redux/services/musicCore'
import { Loader, Error, SongCard } from '@/components'
import { handlePauseClick, handlePlayClick } from '@/utils/playPauseMusic'
import { ISongCard } from '@/types'
import { COUNT } from '@/constants'

interface ArtistSongsProps {
  artistId: string
}

const ArtistSongs: FC<ArtistSongsProps> = ({ artistId }) => {
  const [page, setPage] = useState<number>(1)
  const { data, error } = useGetArtistSongsQuery({ id: artistId, page: page, count: COUNT })
  const totalPage = Math.ceil(data?.data?.total / COUNT)

  const handleChangeNextPage = (currentPage: number, totalPage: number) => {
    if (totalPage <= 1) return
    if (currentPage >= totalPage) return
    setPage((prev) => prev + 1)
  }

  const handleChangePrevPage = (currentPage: number, totalPage: number) => {
    if (totalPage <= 1) return
    if (currentPage <= 1) return
    setPage((prev) => prev - 1)
  }

  if (error) return <Error />

  const playlist = data?.data || []

  return (
    <>
      <div className="flex gap-1 items-center justify-center">
        <button
          onClick={() => handleChangePrevPage(page, totalPage)}
          className={`w-5 h-5 ${page <= 1 ? 'pointer-events-none' : ''}`}
        >
          <FcPrevious color="red" className="w-5 h-5" />
        </button>
        <span className="text-white">{`${page} / ${totalPage}`}</span>
        <button
          onClick={() => handleChangeNextPage(page, totalPage)}
          className={`w-5 h-5 ${page >= totalPage ? 'pointer-events-none' : ''}`}
        >
          <FcNext className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4 mb-10 grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-4" key={playlist?.title}>
        {playlist?.items?.map((item: ISongCard, index: number) => (
          <SongCard
            key={`${item?.title} ${index}`}
            artists={item?.artists}
            encodeId={item?.encodeId}
            thumbnail={item?.thumbnail}
            title={item?.title}
            streamingStatus={item?.streamingStatus}
            index={index}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(item, playlist?.items, index)}
          />
        ))}
      </div>
    </>
  )
}

const ArtistDetails = () => {
  const { artistId } = useParams()
  const { data, isFetching, error } = useGetArtistQuery(artistId)
  const artist = data?.data || null

  if (isFetching) return <Loader title="Loading songs..." />

  if (error || !artist) return <Error />

  return (
    <div>
      <div className="flex flex-row sm:justify-start justify-center items-center gap-4 mb-4">
        <div className="sm:w-72 sm:h-72 w-40 h-auto rounded-full overflow-hidden">
          <img
            className="block w-full hover:scale-105 transition-all ease-in-out duration-300"
            src={artist?.thumbnailM}
            alt="thumbnail"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-white md:text-lg text-base font-bold ellipsis-two-line">Nghệ sĩ: {artist?.name}</h3>
          <p className="text-white/75 text-xs mt-2">Tên thật: {artist?.realname}</p>
          <p className="text-white/75 text-xs mt-2">Sinh nhật: {artist?.birthday}</p>
          <p className="text-white/75 text-xs mt-2">{artist?.totalFollow} người theo dõi</p>
        </div>
      </div>
      <ArtistSongs artistId={artist?.id} />
    </div>
  )
}

export default ArtistDetails
