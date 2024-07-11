import React from 'react'

type Props = {}

export default function Logincomponent({}: Props) {
  return (
    <div className="bg-[#1d1415] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[20vh] mb-[4vh] text-[#fedada]">
        <h1>Log In</h1>
      </div>
      <form className="px-[15vw] space-y-[5vh]">
      <div className="flex flex-col justify-center">
        <input
          type="text"
          name="title"
          className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
          placeholder="email"
        />
      </div>
      <div className="flex flex-col justify-center">
        <input
          type="password"
          name="title"
          className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-[#f7b0b6] h-[5vh] rounded-[0.5vh] text-[#751d29]" type="submit">Login</button>
      </div>
      </form>
      <div className="flex justify-center mt-[2vh] text-[#fedada]">
        Don't have an account?
        <a href="#" className="text-[#ab9fa9] underline">
          Sign up
        </a>
      </div>
    </div>
  )
}