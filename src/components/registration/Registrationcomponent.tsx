import React, { useState} from "react";
import { signUp } from "@/services/apiServices";
type Props = {};

export default function Registrationcomponent({}: Props) {

  /* const [user, setUser] = useState({ firstname: "", lastname: "", username: "", age: "", email: "", password: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e ) => {
    e.preventDefault();
    try {
      const newUser = await signUp(user);
      setUsers([...users, newUser]);
      setUser({ firstname: "", lastname: "", username: "", age: "", email: "", password: "" });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }; */

  return (
    <div className="bg-[#1d1415] h-screen w-screen flex flex-col">
      <div className="flex justify-center mt-[10vh] mb-[4vh] text-[#fedada]">
        <h1>Sign Up!</h1>
      </div>
      <form className="px-[15vw] space-y-[3vh]">
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="first name"
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="last name"
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="username"
          />
        </div>
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
          <input
            type="number"
            name="title"
            className="h-[5vh] pl-[1vh] rounded-[0.5vh]"
            placeholder="age"
          />
        </div>
        <div className="flex flex-col justify-center ph-[5vh]">
          <button className="bg-[#f7b0b6] h-[5vh] rounded-[0.5vh] text-[#751d29]" type="submit">Register</button>
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
