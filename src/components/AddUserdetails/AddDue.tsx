"use client";
import { postDueValue } from "@/services/infoServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const AddDue = () => {
  const [dueValue, setDueValue] = useState("");

  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await postDueValue(Number(dueValue));
      router.push("/image");
      //console.log("Due value posted successfully");
    } catch (error) {
      console.error("Error posting due value:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-screen w-screen">
      <div className="flex flex-row items-center pt-[40vh]">
        <div className="text-cyan-50 text-[18px] ml-[20vw] mr-[4vw]">
          <h2>Due In Weeks</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              type="number"
              name="dueValue"
              value={dueValue}
              onChange={(e) => setDueValue(e.target.value)}
              className="bg-pink-100 h-[5vh] w-[20vw] pl-[1vh] rounded-[0.5vh] shadow-[5px_12px_20px_-10px_rgba(0,0,0,1)]"
              required
            />
          </div>
        </form>
      </div>
      <div>
        <button
          className="bg-slate-800 h-[5vh] w-[18vw] mt-[40vh] ml-[70vw] rounded-[1vh] text-white"
          type="submit"
          onClick={handleSubmit}
        >
          <HiOutlineChevronDoubleRight className="size-[5vh] ml-[4vw]" color="#FB16FA"/>
        </button>
      </div>
    </div>
  );
};

export default AddDue;
