import React from 'react'

type Props = {}

export default function Logincomponent({}: Props) {
  return (
    <div className="bg-sky-300 h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[20vh] mb-[4vh]">
        <h1>Log In</h1>
      </div>
      <form className="px-[15vw] space-y-[5vh]">
      <div className="flex flex-col justify-center">
        <input
          type="text"
          name="title"
          className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col justify-center">
        <input
          type="password"
          name="title"
          className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
          placeholder="password..."
        />
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-lime-400 h-[5vh] rounded-[0.5vh]" type="submit">Login</button>
      </div>
      </form>
      <div className="flex justify-center mt-[2vh]">
        Don't have an account?
        <a href="#" className="text-fuchsia-700 underline">
          Sign up
        </a>
      </div>
    </div>
  )
}