import { FC, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlineUserGroup } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
import { BiSolidVideos } from 'react-icons/bi'
import { IconType } from 'react-icons'

import { logo } from '@/assets'

interface NavLinksProps {
  handleClick?: () => void
}

interface ILink {
  name: string
  to: string
  icon: IconType
}

const links: ILink[] = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'MV', to: '/mv', icon: BiSolidVideos },
  { name: 'Top 100', to: '/top-100', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
]

const NavLinks: FC<NavLinksProps> = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((item: ILink) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center  my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

const SideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to="/" className="w-20 mx-auto">
          <img src={logo} alt="logo" className="w-20 object-contain block" />
        </Link>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {!mobileMenuOpen ? (
          <div className="cursor-pointer" onClick={() => setMobileMenuOpen(true)}>
            <HiOutlineMenu className="w-6 h-6 mr-2 text-white" />
          </div>
        ) : (
          <div className="cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            <RiCloseLine className="w-6 h-6 mr-2 text-white" />
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-20 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default SideBar
