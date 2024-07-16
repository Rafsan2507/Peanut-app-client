"use client";
import React from "react";

type Props = {};

const AddHobbies = (props: Props) => {
  const preferences = [
    "Foodie",
    "Neighborhood newbie",
    "Leo",
    "Wine time",
    "Bookworm",
    "Crafty",
    "Beauty & style",
    "Writing",
    "Yoga",
  ];
  return(
  <>
      <div className="bg-[#1d1415] h-screen w-screen flex flex-col items-center pt-[8vh]">
        <div className="text-white mb-[5vh]">
          <h2>Select Your Preferences</h2>
        </div>
        <div className="grid grid-cols-3 gap-[4vw] mb-[5vh]">
          {preferences.map((preference) => (
            <button
              key={preference}
              className="bg-[#751d29] text-[#f7b0b6] h-[10vh] w-[28vw] rounded-[1vh]"
            >
              {preference}
            </button>
          ))}
        </div>
        <button className="bg-[#f7b0b6] h-[5vh] w-[20vw] mt-[40vh] rounded-[0.5vh] text-[#751d29]">
          next
        </button>
      </div>
    </>
  );
};

export default AddHobbies;
