"use client";
import { getOwnProfile } from "@/services/profileServices";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbBrandPeanut } from "react-icons/tb";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { removeToken } from "@/services/tokenServices";
type Props = {}
interface SelfProfile {
    id: number;
    firstname: string;
    due: number;
    image: string;
  }
const OwnProfile = (props: Props) => {
    const [person, setPerson] = useState<SelfProfile | null>(null);

    useEffect(() => {
        const fetchOwnProfile = async () => {
        try {
            const userProfile = await getOwnProfile();
            setPerson(userProfile);
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
        }
        };
        fetchOwnProfile();
    }, []);

    const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <>
      <div>
        <div className="flex flex-row">
        
      
      
        <h2 className="w-[50vw] flex text-left text-zinc-100 text-[1.7rem] font-bold pt-[5vh] pl-[6vw]">
          {person?.firstname}
        </h2>
        <button className="pt-[6vh] pl-[35vw]" onClick={handleLogout}>
      <RiLogoutBoxRLine className="size-[4vh]" color="#C91363"/>
      </button>
        </div>
      
        <div className="flex flex-row h-[6vh] pl-[4.5vw] items-center">
          <TbBrandPeanut className="size-[5vh] mr-[2vw]" color="#7612FF" />
          <h2 className="text-zinc-100">{person?.due} week</h2>
        </div>

        <div className="relative w-[100vw] h-[70vh] px-[1vw] mt-[1vh]">
          {person?.image && (
            <Image
              src={person.image}
              className="card w-full h-full bg-cover bg-center border border-2 border-purple-700 rounded-[1.5vh] shadow-[5px_15px_20px_-15px_rgba(0,0,0,1)]"
              width={100}
              height={200}
              alt={person.firstname}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default OwnProfile