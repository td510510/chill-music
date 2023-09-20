import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { SearchBar, SideBar, MusicPlayer, VideoPlayer } from '@/components'
import { ArtistDetails, Top100, Home, Search, SongDetails, TopCharts, Playlist, MV } from '@/pages'
import { selectPlayer, playPause } from './redux/features/playerSlice'

function App() {
  const { activeSong } = useSelector(selectPlayer)
  const dispatch = useDispatch()

  useEffect(() => {
    // Always pause audio after reloading
    dispatch(playPause(false))
  }, [])

  return (
    <div className="relative flex bg-gradient-to-br from-black to-[#121286]">
      <SideBar />
      <div className="flex-1 flex flex-col max-w-[1442px] mx-auto">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse pb-28">
          <div className="flex-1 h-fit pb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-100" element={<Top100 />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/mv" element={<MV />} />
              <Route path="/mv/:mvId" element={<VideoPlayer />} />
              <Route path="/artist/:artistId" element={<ArtistDetails />} />
              <Route path="/playlist/:playlistId" element={<Playlist />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default App
