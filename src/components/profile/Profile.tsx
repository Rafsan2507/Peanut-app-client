import Image from "next/image";
import React from "react";
import { TbBrandPeanut } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { RxHand } from "react-icons/rx";
import { GiLeo } from "react-icons/gi";
import { GiCrafting } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
type Props = {};

const Profile = (props: Props) => {
  const people = [
    { url: "/images/image1.jpg", alt: "image1" },
    { url: "/images/image2.jpg", alt: "image2" },
    { url: "/images/image3.jpg", alt: "image3" },
    { url: "/images/image4.jpg", alt: "image4" },
    { url: "/images/image5.jpg", alt: "image5" },
  ];

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

      <div className="bg-[#000000] space-y-[2vh] pl-[3vw] pb-[2vh]">
        <div className="flex flex-row pt-[5vh]">
          <IoMdTime className="size-[3vh] mr-[2vw]" color="#fddad9" />
          <h2 className="text-[#efd6d4]">Working full time</h2>
        </div>
        <div className="flex flex-row space-x-[4vw]">
          <div className="flex flex-row items-center">
            <RxHand className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Neighborhood Newbie</h2>
          </div>
          <div className="flex flex-row">
            <GiLeo className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Leo</h2>
          </div>
        </div>
        <div className="flex flex-row space-x-[7vw]">
          <div className="flex flex-row">
            <GiCrafting className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Crafty</h2>
          </div>
          <div className="flex flex-row items-center">
            <IoFastFoodOutline
              className="size-[3vh] mr-[2vw]"
              color="#fddad9"
            />
            <h2 className="text-[#efd6d4]">Foodie</h2>
          </div>
          <div className="flex flex-row items-center">
            <TbWriting className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Writing</h2>
          </div>
        </div>
        <div className="flex flex-row space-x-[7vw]">
          <div className="flex flex-row">
            <FaWineGlassAlt className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Wine time</h2>
          </div>
          <div className="flex flex-row">
            <FaBook className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Bookworm</h2>
          </div>
          <div className="flex flex-row">
            <GrYoga className="size-[3vh] mr-[2vw]" color="#fddad9" />
            <h2 className="text-[#efd6d4]">Yoga</h2>
          </div>
        </div>
      </div>

      <div className="bg-[#000000] pt-[6vh]">
        <h2 className="text-[#efd6d4]">Recent Posts</h2>
      </div>

      <div className="bg-[#000000] pt-[4vh]">
        <h2 className="text-[#efd6d4] mb-[5vh]">Connections</h2>
        <div className="flex flex-row items-center">
          {people.map((person, index) => (
            <Image
              key={index}
              src={person.url}
              className={`absolute card w-[10vw] h-[5vh] rounded-full ml-[${
                index * 5
              }vw]`}
              width={20}
              height={20}
              alt={person.alt}
            />
          ))}
        </div>
      </div>

      <div className="flex grid flex-col justify-items-center h-[20vh] bg-[#000000] pt-[5vh]">
        <h2 className="text-[#efd6d4] mb-[4vh]">
          Peanut member since October 2022
        </h2>
        <h2 className="text-[#efd6d4]">Block | Report</h2>
      </div>
    </>
  );
};

export default Profile;
