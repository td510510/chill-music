import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

import { useGetMVQuery } from '@/redux/services/musicCore'
import { Loader, Error } from '@/components'

const VideoPlayer = () => {
  const { mvId } = useParams()
  const [videoUrl, setVideoUrl] = useState<string>('')
  const { data, isFetching, error } = useGetMVQuery(mvId)
  const initVideo = data?.data?.streaming?.hls || null

  if (isFetching) return <Loader title="Loading video..." />

  if (error) return <Error />

  if (!initVideo) return <Error />

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <ReactPlayer url={videoUrl || initVideo?.['720p']} controls={true} width="100%" height="auto" />
      <div className="flex gap-5 text-white">
        <button
          className="p-1 w-16 rounded-lg bg-purple-600 text-sm hover:bg-purple-400"
          onClick={() => setVideoUrl(initVideo?.['360p'])}
        >
          360p
        </button>
        <button
          className="p-1 w-16 rounded-lg bg-purple-600 text-sm hover:bg-purple-400"
          onClick={() => setVideoUrl(initVideo?.['480p'])}
        >
          480p
        </button>
        <button
          className="p-1 w-16 rounded-lg bg-purple-600 text-sm hover:bg-purple-400"
          onClick={() => setVideoUrl(initVideo?.['720p'])}
        >
          720p
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
