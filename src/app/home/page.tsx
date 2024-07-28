"use client";

import Bottombar from '@/components/home/Bottombar';
import Cardcomponent from '@/components/home/Cardcomponent'
import Topnavbar from '@/components/home/Topnavbar'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <>
    
    <div className='h-[100vh] w-[100vw] bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0]'>
    <Topnavbar/>
    
    <Cardcomponent/>
    <Bottombar/>
    </div>
    
    
    </>
  )
}

export default page