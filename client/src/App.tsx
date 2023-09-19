import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { SearchBar, SideBar, MusicPlayer, VideoPlayer } from '@/components'
import { ArtistDetails, Top100, Discover, Search, SongDetails, TopCharts, Playlist, MV } from '@/pages'
import { selectPlayer } from './redux/features/playerSlice'

function App() {
  const { activeSong } = useSelector(selectPlayer)

  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-4">
            <Routes>
              <Route path="/" element={<Discover />} />
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
          {/* <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div> */}
        </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default App
