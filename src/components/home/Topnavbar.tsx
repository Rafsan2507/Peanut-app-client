import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { removeToken } from "@/services/tokenServices";
import { useRouter } from "next/navigation";
type Props = {};

function Topnavbar({}: Props) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div className="flex flex-column h-[10vh] items-center">
      {/* <div className="pl-[5vw]">
        <IoPersonCircleSharp className="size-[4vh]" color="#ffffff"/>
      </div> */}
      <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-blue-700 inline-block text-transparent bg-clip-text px-[5vw] justify-self-center text-[1.6rem] font-semibold ml-[35vw]">
        <h2>peanut</h2>
      </div>

      <div className="ml-[18vw]">
      <button className=" h-[4vh] rounded-[1vh] mt-[1.5vh]" onClick={handleLogout}>
      <IoMdLogOut className="size-[3.5vh]" color="black"/>
      </button>
      </div>
    </div>
  );
}

export default Topnavbar;
