import { Loader, Error, MVCard } from '@/components'

import { useGetListMVQuery } from '@/redux/services/musicCore'

const MV = () => {
  const { data, isFetching, error } = useGetListMVQuery({ id: 'IWZ9Z08I', page: 1, count: 20 })

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  const listMV = data?.data?.items || []

  return (
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {listMV?.map((item: { encodeId: string; title: string; thumbnail: string; artists: [] }) => (
        <MVCard encodeId={item?.encodeId} title={item?.title} thumbnail={item?.thumbnail} artists={item?.artists} />
      ))}
    </div>
  )
}

export default MV
