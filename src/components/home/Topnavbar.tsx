import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
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
    <div className="flex flex-column h-[12vh] items-center">
      <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-blue-700 inline-block text-transparent bg-clip-text px-[5vw] justify-self-center text-[1.8rem] font-semibold ml-[34vw]">
        <h2>peanut</h2>
      </div>
    </div>
  );
}

export default Topnavbar;
