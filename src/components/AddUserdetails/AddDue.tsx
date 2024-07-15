"use client";
import React from "react";

type Props = {};

const AddDue = (props: Props) => {
  return (
    <>
      <div className="bg-[#1d1415] h-screen w-screen">
        <div className="flex flex-row items-center pt-[40vh]">
          <div className="text-white ml-[20vw] mr-[4vw]">
            <h2>Due In Weeks</h2>
          </div>
          <form>
            <div className="flex justify-center">
              <input
                type="number"
                name="firstname"
                className="h-[5vh] w-[20vw] pl-[1vh] rounded-[0.5vh]"
                required
              />
            </div>
          </form>
        </div>
        <div>
          <button
            className="bg-[#f7b0b6] h-[5vh] w-[20vw] mt-[40vh] ml-[70vw] rounded-[0.5vh] text-[#751d29]"
            type="submit"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDue;
