import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
type Props = {};

function Topnavbar({}: Props) {
  return (
    <div className="flex flex-column bg-[#282828] h-[8vh] items-center">
      <div className="pl-[5vw]">
        <IoPersonCircleSharp className="size-[4vh]"color="#ffffff"/>
      </div>
      <div className="px-[28vw] text-[#e0a5aa] justify-self-center text-[1.2rem]">
        <h2>peanut</h2>
      </div>
    </div>
  );
}

export default Topnavbar;
