import React from 'react'
import { IconContext } from 'react-icons';
import { FiUser } from 'react-icons/fi';
import { RiHome3Line } from 'react-icons/ri';

import { IoChatboxOutline } from "react-icons/io5";

type Props = {}

const Bottombar = (props: Props) => {
  return (
    <div className="bg-[#282828] flex items-center justify-around h-[8vh]">
      <IconContext.Provider value={{ color: '#7D848D', size: '20' }}>
        <RiHome3Line color='#fddad9'/>
        <IoChatboxOutline color='#fddad9'/>
        <FiUser color='#fddad9'/>
      </IconContext.Provider>
    </div>
  )
}

export default Bottombar