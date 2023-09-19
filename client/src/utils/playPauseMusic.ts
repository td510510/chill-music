import { playPause, setActiveSong } from '@/redux/features/playerSlice'
import { store } from '../redux/store'

const handlePauseClick = () => {
  store.dispatch(playPause(false))
}

const handlePlayClick = (song: object, playlist: [], index: number) => {
  store.dispatch(setActiveSong({ song, playlist, index }))
  store.dispatch(playPause(true))
}

export { handlePauseClick, handlePlayClick }
