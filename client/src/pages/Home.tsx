import { Error, Loader, PlaylistCard } from '@/components'
import { useGetHomePlayListQuery } from '@/redux/services/musicCore'
import { SECTION_TYPE } from '@/constants'
import { IPlaylistCard } from '@/types'

const Home = () => {
  const { data, isFetching, error } = useGetHomePlayListQuery('')

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      {data.data.items.map((item) => {
        return item.sectionType == SECTION_TYPE.PLAYLIST ? (
          <div className="mt-4 mb-10" key={item.title}>
            <h2 className="font-bold sm:text-3xl text-xl text-white text-left sm:mb-10 mb-6">{item.title}</h2>
            <div className="grid xl:grid-cols-4 min-[850px]:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 justify-start md:gap-6 gap-4">
              {item.items.map((songs: IPlaylistCard) => (
                <PlaylistCard
                  key={songs?.title}
                  title={songs?.title}
                  thumbnail={songs?.thumbnailM || songs?.thumbnail}
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

export default Home
