"use client";
import React, { FormEvent, useState } from "react";
import { signUp } from "@/services/authServices";
import { setToken } from "@/services/tokenServices";
import { useRouter } from "next/navigation";
type Props = {};

export default function Registrationcomponent({}: Props) {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newUser = await signUp(user);
      setToken(newUser.accessToken);
      router.push("/due");
      setUser({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[10vh] mb-[4vh] text-gray-800">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit} className="px-[16vw] space-y-[3vh]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-[#CA8BEF] placeholder-gray-700"
            placeholder="First name"
            
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-[#D0A1ED] placeholder-gray-700"
            placeholder="Last name"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-purple-300 placeholder-gray-700"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-purple-200 placeholder-gray-700"
            placeholder="email"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-purple-100 placeholder-gray-700"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex flex-col justify-center ph-[5vh] mt-[3vh] px-[22vw]">
          {/* <button
            className="bg-gradient-to-l from-gray-500 to-slate-900 h-[5vh] rounded-[1vh] text-white"
            type="submit"
          >
            Sign Up
          </button> */}
          <button type="submit" className="bg-gradient-to-l from-purple-400 to-blue-500 hover:from-rose-500 hover:to-blue-500 h-[5vh] rounded-[2vh]">
  Sign Up
</button>
        </div>
      </form>
      <div className="flex justify-center mt-[7vh] text-[#fedada]">
        Already have an account?
        <a href="#" className="white underline">
          Log in
        </a>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col justify-center">
          <input
            type="number"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="age"
          />
        </div> */
}
