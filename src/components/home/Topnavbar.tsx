import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
type Props = {};

function Topnavbar({}: Props) {
  return (
    <div className="flex flex-column bg-[#282828] h-[8vh] items-center">
      <div className="pl-[5vw]">
        <IoPersonCircleSharp className="size-[4vh]" color="#ffffff"/>
      </div>
      <div className="px-[28vw] text-[#f5bcc7] justify-self-center text-[1.2rem] font-semibold">
        <h2>peanut</h2>
      </div>
    </div>
  );
}

export default Topnavbar;
