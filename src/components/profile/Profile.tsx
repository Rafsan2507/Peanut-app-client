"use client";
import { getUserProfile } from "@/services/infoServices";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbBrandPeanut } from "react-icons/tb";

interface UserProfile {
  id: number;
  firstname: string;
  due: number;
  image: string;
}

const Profile = ({ id }: { id: number }) => {
  const [person, setPerson] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(id);
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
        <h2 className="w-[100vw] flex text-left text-gray-700 text-[1.5rem] font-bold p-[2vh]">
          {person?.firstname}
        </h2>
        <div className="flex flex-row h-[6vh] pl-[5vw] items-center">
          <TbBrandPeanut className="size-[4vh] mr-[2vw]" color="#374151" />
          <h2 className="text-gray-700">{person?.due}</h2>
        </div>

        <div className="relative w-[100vw] h-[75vh] px-[1vw]">
          {person?.image && (
            <Image
              src={person.image}
              className="card w-full h-full bg-cover bg-center rounded-[1vh]"
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
