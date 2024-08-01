import OwnHobbies from '@/components/OwnProfile/OwnHobbies'
import OwnProfile from '@/components/OwnProfile/OwnProfile'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <div className="h-full w--[100vw] bg-gradient-to-br from-[#d4a4fa] to-[#6e7df0]">
            <OwnProfile/>
            <OwnHobbies/>
        </div>
    </>
  )
}

export default page