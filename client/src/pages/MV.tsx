import { useState } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { Loader, Error, MVCard } from '@/components'

import { useGetListMVQuery } from '@/redux/services/musicCore'
import { COUNT } from '@/constants'

const MV = () => {
  const [page, setPage] = useState<number>(1)
  const { data, isFetching, error } = useGetListMVQuery({ id: 'IWZ9Z08I', page: page, count: COUNT })
  const listMV = data?.data?.items || []
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

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

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
      <div className="grid xl:grid-cols-4 min-[850px]:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mt-4">
        {listMV?.map(
          (item: { encodeId: string; title: string; thumbnail: string; thumbnailM?: string; artists: [] }) => (
            <MVCard
              key={item?.title}
              encodeId={item?.encodeId}
              title={item?.title}
              thumbnail={item?.thumbnailM || item?.thumbnail}
              artists={item?.artists}
            />
          )
        )}
      </div>
    </>
  )
}

export default MV
