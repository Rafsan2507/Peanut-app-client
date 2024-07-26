"use client";
import React, { useState, FormEvent } from "react";
import { logIn } from "@/services/authServices";
import { setToken } from "@/services/tokenServices";
import { useRouter } from "next/navigation";

type Props = {};

export default function Logincomponent({}: Props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newUser = await logIn(user);
      setToken(newUser.accessToken);
      router.push("/home");
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[20vh] mb-[4vh] text-black">
        <h1>Log In</h1>
      </div>
      <form onSubmit={handleSubmit} className="px-[16vw]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-[#D0A1ED] placeholder-gray-700"
            placeholder="email"
            required
          />
        </div>
        <div className="flex flex-col justify-center mt-[5vh]">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-purple-300 placeholder-gray-700"
            placeholder="password"
            required
          />
        </div>

        <div className="flex flex-col justify-center mt-[5vh] px-[22vw]">
          {/* <button
            className="bg-gradient-to-l from-0 to-[#8649f4] h-[5vh] rounded-[0.5vh] text-[#751d29]"
            type="submit"
          >
            Login
          </button> */}
          <button type="submit" className="bg-gradient-to-l from-purple-400 to-blue-500 hover:from-rose-500 hover:to-blue-500 h-[5vh] rounded-[1vh]">
  Log In
</button>
        </div>
      </form>
      <div className="flex justify-center mt-[2vh] text-[#fedada]">
        Don&apos;t have an account?
        <a href="#" className="text-gray-700 underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
