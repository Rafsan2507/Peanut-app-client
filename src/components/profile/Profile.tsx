"use client";
import { getUserProfile } from "@/services/infoServices";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { TbBrandPeanut } from "react-icons/tb";
type Props = {};
interface UserProfile {
  id: number;
  firstname: string;
  due: number;
  image: string;
}

const Profile = (props: Props) => {
  const [person, setPerson] = useState<UserProfile | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(Number(id));
        console.log("Fetched user profile:", userProfile);
        setPerson(userProfile);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  return (
    <>
      <div>
        <h2 className="w-[100vw] flex text-left text-zinc-100 text-[1.6rem] font-bold pt-[4vh] pl-[6vw]">
          {person?.firstname}
        </h2>
        <div className="flex flex-row h-[6vh] pl-[4.5vw] items-center">
          <TbBrandPeanut className="size-[5vh] mr-[2vw]" color="#7612FF" />
          <h2 className="text-zinc-100">{person?.due} week</h2>
        </div>

        <div className="relative w-[100vw] h-[70vh] px-[1vw] mt-[1vh]">
          {person?.image && (
            <Image
              src={person.image}
              className="card w-full h-full bg-cover bg-center border border-2 border-green-100 rounded-[1vh] shadow-[5px_15px_20px_-15px_rgba(0,0,0,1)]"
              width={100}
              height={200}
              alt={person.firstname}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
