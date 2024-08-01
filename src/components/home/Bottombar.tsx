import React from 'react'
import { IconContext } from 'react-icons';
import { FiUser } from 'react-icons/fi';
import { RiHome3Line } from 'react-icons/ri';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { IoChatboxOutline } from "react-icons/io5";

type Props = {}

const Bottombar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div className="flex items-center justify-around mt-[76vh] h-[12vh]">
      <IconContext.Provider value={{ color: '#7D848D', size: '22' }}>
      <Link
            className={`link ${pathname === '/home' ? 'active' : ''}`}
            href="/home"
          >
        <RiHome3Line color='#fddad9'/>
      </Link>

      <Link
            className={`link ${pathname === '/connection' ? 'active' : ''}`}
            href="/connection"
          >
        <IoChatboxOutline color='#fddad9'/>
      </Link>

      <Link className={`link ${pathname === '/profile/self-profile' ? 'active' : ''}`}
            href="/profile/self-profile">

        <FiUser color='#fddad9'/>

      </Link>
      </IconContext.Provider>
    </div>
  )
}

export default Bottombar