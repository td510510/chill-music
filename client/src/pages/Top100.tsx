import { Error, Loader, PlaylistCard } from '@/components'
import { useGetTop100Query } from '@/redux/services/musicCore'
import { SECTION_TYPE } from '@/constants'
import { IPlaylistCard } from '@/types'

const Top100 = () => {
  const { data, isFetching, error } = useGetTop100Query('')

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      {data.data.map((item) => {
        return item.sectionType == SECTION_TYPE.PLAYLIST ? (
          <div className="mt-4 mb-10" key={item?.title}>
            <h2 className="font-bold text-3xl text-white text-left mb-10">{item?.title}</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
              {item.items.map((songs: IPlaylistCard) => (
                <PlaylistCard
                  key={songs?.title}
                  title={songs?.title}
                  thumbnail={songs?.thumbnail}
                  id={songs?.encodeId}
                  sortDescription={songs?.sortDescription}
                />
              ))}
            </div>
          </div>
        ) : (
          ''
        )
      })}
    </div>
  )
}

export default Top100
