import React from "react";

type Props = {};

export default function Registrationcomponent({}: Props) {
  return (
    <div className="bg-sky-300 h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[10vh] mb-[4vh]">
        <h1>Sign Up!</h1>
      </div>
      <form className="px-[15vw] space-y-[3vh]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="First Name..."
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="Last Name..."
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="Username"
          />
        </div>
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
            type="number"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="Age"
          />
        </div>
        <div className="flex flex-col justify-center ph-[5vh]">
          <button className="bg-lime-400 h-[5vh] rounded-[0.5vh]" type="submit">Register</button>
        </div>
      </form>
      <div className="flex justify-center mt-[2vh]">
        Already have an account?
        <a href="#" className="text-fuchsia-700 underline">
          Log in
        </a>
      </div>
    </div>
  );
}
