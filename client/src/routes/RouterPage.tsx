import { Loader } from '@/components'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const VideoPlayer = lazy(() => import('@/components/VideoPlayer'))
const ArtistDetails = lazy(() => import('@/pages/ArtistDetails'))
const Home = lazy(() => import('@/pages/Home'))
const MV = lazy(() => import('@/pages/MV'))
const Playlist = lazy(() => import('@/pages/Playlist'))
const SearchResult = lazy(() => import('@/pages/SearchResult'))
const SongDetails = lazy(() => import('@/pages/SongDetails'))
const Top100 = lazy(() => import('@/pages/Top100'))
const TopCharts = lazy(() => import('@/pages/TopCharts'))

const RouterPage = () => {
  return (
    <Suspense fallback={<Loader title="Loading" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-100" element={<Top100 />} />
        <Route path="/top-charts" element={<TopCharts />} />
        <Route path="/mv" element={<MV />} />
        <Route path="/mv/:mvId" element={<VideoPlayer />} />
        <Route path="/artist/:artistId" element={<ArtistDetails />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
        <Route path="/songs/:songId" element={<SongDetails />} />
        <Route path="/search/:searchTerm" element={<SearchResult />} />
      </Routes>
    </Suspense>
  )
}

export default RouterPage
