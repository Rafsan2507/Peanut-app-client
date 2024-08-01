"use client";
import React, { useEffect, useState } from "react";
import { getUserPreferences } from "@/services/profileServices";
import { useParams } from "next/navigation";
type Props = {};

const Hobbies = (props: Props) => {

  const [activities, setActivities] = useState<string[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesData = await getUserPreferences(Number(id));
        /* console.log( activitiesData); */
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
        <div key={index} className="text-[1.8vh] font-semibold h-[5.5vh] w-[26vw] rounded-[5vh] bg-[#7612FF] text-purple-100 flex items-center justify-center border border-cyan-200 shadow-[5px_12px_20px_-8px_rgba(0,0,0,1)]">
          {activity}
        </div>
      ))}
    </div>
      
    </>
  );
};

export default Hobbies;