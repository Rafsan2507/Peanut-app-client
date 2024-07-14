"use client";

import Buttoncomponent from '@/components/home/Buttoncomponent';
import Cardcomponent from '@/components/home/Cardcomponent'
import Topnavbar from '@/components/home/Topnavbar'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <>
    
    <Topnavbar/>
    <Cardcomponent/>
    <Buttoncomponent/>
    </>
  )
}

export default page