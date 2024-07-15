import React from "react";
import Image from "next/image";
type Props = {};

const Connections = (props: Props) => {
  const people = [
    { url: "/images/image1.jpg", alt: "image1" },
    { url: "/images/image2.jpg", alt: "image2" },
    { url: "/images/image3.jpg", alt: "image3" },
    { url: "/images/image4.jpg", alt: "image4" },
    { url: "/images/image5.jpg", alt: "image5" },
  ];
  return (
    <>
      <div className="bg-[#000000] pt-[4vh]">
        <h2 className="text-[#efd6d4] mb-[5vh]">Connections</h2>
        <div className="flex flex-row items-center relative">
          {people.map((person, index) => (
            <Image
              key={index}
              src={person.url}
              className={`card w-[10vw] h-[5vh] rounded-full `}
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

export default Connections;