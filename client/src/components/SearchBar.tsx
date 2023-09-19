import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 h-[72px] text-gray-400 focus-within:text-gray-600 flex items-center"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all file
      </label>
      <div className="flex flex-row justify-start items-center gap-4 flex-1">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search..."
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p4"
        />
      </div>
    </form>
  )
}

export default SearchBar
