"use client";
import Image from "next/image";
import React from "react";
import { TbBrandPeanut } from "react-icons/tb";
type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <div>
        <h2 className="w-[100vw] flex text-left text-[#efd6d4] text-[1.5rem] font-bold p-[2vh] bg-[#1d1415]">
          Jane
        </h2>
        <div className="flex flex-row h-[6vh] bg-[#1d1415] pl-[5vw] items-center">
          <TbBrandPeanut className="size-[4vh] mr-[2vw]" color="#fddad9" />
          <h2 className="text-[#efd6d4]">28 weeks</h2>
        </div>
      </div>

      <div className="relative w-[100vw] h-[50vh]">
        <Image
          src="/images/image1.jpg"
          className="card w-full h-full bg-cover bg-center"
          width={100}
          height={200}
          alt="image"
        />
      </div>
    </>
  );
};

export default Profile;
