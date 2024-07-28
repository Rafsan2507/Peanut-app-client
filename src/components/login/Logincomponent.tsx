"use client";
import React, { useState, FormEvent } from "react";
import { logIn } from "@/services/authServices";
import { setToken } from "@/services/tokenServices";
import { useRouter, usePathname } from "next/navigation";
import Link from 'next/link'
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

  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[20vh] mb-[4vh] text-cyan-100 text-[18px] font-semibold">
        <h1>Log In</h1>
      </div>
      <form onSubmit={handleSubmit} className="px-[16vw]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-full bg-[#D0A1ED] placeholder-gray-700 shadow-[5px_12px_15px_-8px_rgba(0,0,0,1)]"
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
            className="h-[5vh] pl-[1vh] rounded-full bg-purple-300 placeholder-gray-700 shadow-[5px_12px_15px_-8px_rgba(0,0,0,1)]"
            placeholder="password"
            required
          />
        </div>

        <div className="flex flex-col justify-center mt-[5vh] px-[22vw]">
          
          <button type="submit" className="bg-gradient-to-l from-purple-400 to-blue-500 hover:from-rose-500 hover:to-blue-500 h-[5vh] rounded-[1vh] text-pink-100 shadow-[6px_12px_15px_-6px_rgba(0,220,255,1)]">
  Log In
</button>
        </div>
      </form>
      <div className="flex justify-center mt-[5vh] text-[#fedada]">
        Don&apos;t have an account?
        <Link
            className={`link ${pathname === '/registration' ? 'active' : ''} underline ml-[1vw]`}
            href="/registration"
          >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
