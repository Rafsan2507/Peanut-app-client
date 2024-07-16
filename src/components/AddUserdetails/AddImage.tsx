"use client";
import React, { useState, ChangeEvent } from "react";

type Props = {};

const AddImage = (props: Props) => {
  /* const [file, setFile] = useState<string | undefined>(undefined);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files.length > 0) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setFile(fileURL);
    }
  } */

  return (
    <>
      <div className="bg-[#1d1415] h-screen w-screen">
        <div className="flex flex-col items-center pt-[10vh]">
          <div className="text-white mb-[5vh]">
            <h2>Upload Image</h2>
          </div>
          <div className="flex flex-col items-center mb-[5vh]">
            {/* {image && (
              <img
                src={image as string}
                alt="Preview"
                className="h-[40vh] w-[40vw] object-cover rounded-[0.5vh] mb-[2vh]"
              />
            )} */}
            <input
              type="file"
              accept="image/*"
              /* onChange={handleImageChange} */
              className="text-white mb-[2vh]"
            />
            <button
              className="bg-[#f7b0b6] h-[5vh] w-[20vw] rounded-[0.5vh] text-[#751d29]"
              /* onClick={handleAddImageToDatabase} */
            >
              Add
            </button>
          </div>
          <button className="bg-[#f7b0b6] h-[5vh] w-[20vw] mt-[50vh] ml-[70vw] rounded-[0.5vh] text-[#751d29]">
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default AddImage;
