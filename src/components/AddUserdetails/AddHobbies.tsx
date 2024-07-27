"use client";
import { getHobbyList, postPreferences } from "@/services/authServices";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {};

const AddHobbies = (props: Props) => {
  const [activities, setActivities] = useState<{ id: number, activity: string }[]>([]);
  const [preferences, setPreferences] = useState<number[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<{ id: number, activity: string }[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const activityList = await getHobbyList();
        setActivities(activityList);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getAllActivities();
  }, []);

  const handleSelectActivity = (activityId: number, activityName: string) => {
    setPreferences((prevPreferences) => {
      if (prevPreferences.includes(activityId)) {
        setSelectedActivities(selectedActivities.filter((activity) => activity.id !== activityId));
        return prevPreferences.filter((id) => id !== activityId);
      } else {
        setSelectedActivities([...selectedActivities, { id: activityId, activity: activityName }]);
        return [...prevPreferences, activityId];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postPreferences(preferences);
      router.push("/home");
      //console.log(response);
    } catch (error) {
      console.error("Error submitting preferences:", error);
    }
  };

  const pathname = usePathname()

  return (
    <>
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-[90vh] w-[100vw] flex flex-col items-center pt-[6vh]">
      <div className="text-[#301f62] mb-[5vh]">
        <h2>Preferences</h2>
      </div>
      <div className="grid grid-cols-3 gap-[5vw] mb-[15vh]">
        {activities.map(({ id, activity }) => (
          <button
            key={id}
            onClick={() => handleSelectActivity(id, activity)}
            className={`text-[1.7vh] h-[5.5vh] border w-[26vw] rounded-[5vh] ${
              preferences.includes(id)
                ? "bg-[#7559aa] text-white"
                : " text-[#301f62]"
            }`}
          >
            {activity}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-[4vw]">
        {selectedActivities.map(({ id, activity }) => (
          <div
            key={id}
            className="text-[1.7vh] h-[5.5vh] w-[26vw] rounded-[15vh] bg-indigo-500 text-[#fffcff] flex items-center justify-center"
          >
            {activity}
          </div>
        ))}
      </div>
      
      
    </div>
    <div className="bg-[#6e7df0] h-[10vh]">
    <button
      onClick={handleSubmit}
      className="bg-gradient-to-l from-[#f9457f] to-[#8649f4] h-[5vh] w-[18vw] ml-[70vw] rounded-[1.5vw] text-white"
    >
      <Link
            className={`link ${pathname === '/home' ? 'active' : ''}`}
            href="/home"
          >
      <FaArrowRight className="size-[4vh] ml-[5vw]" color="#90F68C"/>
      </Link>
    </button>
    </div>
    </>
    
  );
};

export default AddHobbies;
