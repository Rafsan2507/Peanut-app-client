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
      router.push("/home");
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
    <div className="bg-[#1d1415] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[10vh] mb-[4vh] text-[#fedada]">
        <h1>Sign Up!</h1>
      </div>
      <form onSubmit={handleSubmit} className="px-[15vw] space-y-[3vh]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="first name"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="last name"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="username"
            required
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
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
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="password"
            required
          />
        </div>

        <div className="flex flex-col justify-center ph-[5vh] mt-[3vh]">
          <button
            className="bg-[#f7b0b6] h-[5vh] rounded-[0.5vh] text-[#751d29]"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-[2vh] text-[#fedada]">
        Already have an account?
        <a href="#" className="text-[#ab9fa9] underline">
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
