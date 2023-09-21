import { FC } from 'react'

import { loader } from '@/assets'

interface LoaderProps {
  title?: string
  type?: 'full' | 'part'
}

const Loader: FC<LoaderProps> = ({ title, type = 'full' }) => {
  if (type === 'part') {
    return (
      <div
        className={`loading w-[100vh] h-[100vw] bg-slate-100 flex justify-center items-center absolute rounded-[inherit]`}
      >
        <div className="loading-content w-full h-full flex flex-col justify-center p-10 space-y-5 animate-fadeInInfinite">
          <div className="w-[20%] h-6 bg-gray-200 opacity-80" />
          <div className="w-[40%] h-6 bg-gray-200 opacity-80" />
          <div className="w-[60%] h-6 bg-gray-200 opacity-80" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-medium text-base sm:text-xl text-white/75 mt-2 text-center">{title || 'Loading'}</h1>
    </div>
  )
}

export default Loader
