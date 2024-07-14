import React from 'react'

import { RxCross1 } from "react-icons/rx";
import { IoMdHand } from "react-icons/io";
type Props = {}

const Buttoncomponent = (props: Props) => {
  return (
    <div className='bg-[#1d1415]'>
    <div className='flex justify-center space-x-[20vw] mt-[78vh]'>
                <button className='bg-[#2b1f1f] text-white py-[1vh] px-[2vw] rounded-full'><RxCross1 className="size-[4vh]" color='#f8d9d4' /></button>
                <button className='bg-[#2b1f1f] text-white py-[1vh] px-[2vw] rounded-full'><IoMdHand className="size-[4vh]" color='#23a459'/></button>
            </div>
            </div>
  )
}

export default Buttoncomponent