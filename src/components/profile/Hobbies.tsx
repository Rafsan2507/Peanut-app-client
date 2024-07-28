import React, { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { RxHand } from "react-icons/rx";
import { GiLeo } from "react-icons/gi";
import { GiCrafting } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { getUserPreferences } from "@/services/infoServices";
import { useParams } from "next/navigation";
type Props = {};

const Hobbies = (props: Props) => {

  const [activities, setActivities] = useState<string[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesData = await getUserPreferences(Number(id));
        console.log("Fetched activities data:", activitiesData); // Debugging line
        if (activitiesData && Array.isArray(activitiesData.activities)) {
          setActivities(activitiesData.activities);
        } else {
          console.error("Fetched data does not contain an array:", activitiesData);
          setActivities([]);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, [id]);
  return (
    <>
    <div className="grid grid-cols-3 gap-3 mt-[5vh] mx-[5vw]">
      {activities.map((activity: string, index: number) => (
        <div key={index} className="text-[1.8vh] font-semibold h-[5.5vh] w-[26vw] rounded-[1vh] bg-[#7612FF] text-purple-100 flex items-center justify-center border border-cyan-200 shadow-[5px_12px_20px_-8px_rgba(0,0,0,1)]">
          {activity}
        </div>
      ))}
    </div>
      
    </>
  );
};

export default Hobbies;