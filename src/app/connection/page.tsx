"use client";
import ConnectionComponent from '@/components/Connections/ConnectionComponent'
import Bottombar from '@/components/home/Bottombar';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <div className='h-full w-[100vw] bg-gradient-to-br from-[#d4a4fa] to-[#6e7df0]'>
      <ConnectionComponent/>
      <Bottombar/>
    </div>
        
    </>
  )
}

export default page