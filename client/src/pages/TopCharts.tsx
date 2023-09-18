import { Error, Loader, SongCard } from '@/components'
import { useGetChartHomeQuery } from '@/redux/services/musicCore'

interface ISongCard {
  streamingStatus: number
  encodeId: string
  thumbnail: string
  title: string
  artists: []
}

const TopCharts = () => {
  const { data, isFetching, error } = useGetChartHomeQuery('')

  if (isFetching) return <Loader title="Loading songs..." />

  if (error) return <Error />

  console.log(data)

  return <div className="flex flex-col"></div>
}

export default TopCharts
