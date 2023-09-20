import { FC } from 'react'

import { loader } from '@/assets'

interface LoaderProps {
  title: string
}

const Loader: FC<LoaderProps> = ({ title }) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-medium text-base sm:text-xl text-white/75 mt-2 text-center">{title || 'Loading'}</h1>
    </div>
  )
}

export default Loader
