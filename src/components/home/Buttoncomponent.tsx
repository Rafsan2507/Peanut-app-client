import React from 'react'
import { ImCross } from "react-icons/im";
type Props = {}

const Buttoncomponent = (props: Props) => {
  return (
    <div className='bg-[#1d1415]'>
    <div className='flex justify-center space-x-[6vw] mt-[78vh]'>
                <button className='bg-[#2b1f1f] text-white py-[1vh] px-[2vw] rounded'>Dislike</button>
                <button className='bg-[#2b1f1f] text-white py-[1vh] px-[2vw] rounded'>Like</button>
            </div>
            </div>
  )
}

export default Buttoncomponent