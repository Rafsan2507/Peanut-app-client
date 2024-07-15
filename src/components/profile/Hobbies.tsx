import React from "react";
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

const Hobbies = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default Hobbies;
